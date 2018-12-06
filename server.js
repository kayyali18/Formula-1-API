const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const environment = process.env.NOD_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

app.locals.title = "BYOBE Database";
app.locals.drivers = [];
app.locals.teams = [];

app.use(bodyParser.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);

// -- DRIVERS -- //

app.get("/api/v1/drivers", (request, response) => {
  database("drivers")
    .select()
    .then(drivers => {
      response.status(200).json(drivers);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch("/api/v1/drivers/:driver_id/team", (request, response) => {
  const { driver_id } = request.params;
  const { team_id } = request.body;

  if (typeof team_id !== "number") {
    return response.status(422).json(`${team_id} is not a number`);
  }

  database("drivers")
    .where("id", driver_id)
    .update({ team_id: team_id })
    .then(driver => {
      if (driver === 0) {
        return response.status(404).json("Driver not found");
      }
      return response.status(201).json(driver);
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
});

// app.get("api/v1/drivers/:driver_name", (request, response) => {
//   // requires - valid param
//   const { driver_name } = request.params;

//   if (typeof driver_name !== "string") {
//     response.status(422).json({ error: "unprocessable entity" });
//   }

//   database("drivers")
//     .where(driver_name, "name")
//     .select()
//     .then(driver => {
//       if (driver) {
//         response.status(200).json(driver);
//       } else {
//         response.status(404).json();
//       }
//     })
//     .catch(error => {
//       response.status(500).json({ error });
//     });
// });

app.patch("/api/v1/drivers/:driver_id/points", (request, response) => {
  const { driver_id } = request.params;
  const { points } = request.body;

  if (!points) return response.status(422).send("Unprocessable entity");

  if (!driver_id) {
    return response.status(404).send("Driver not found");
  }

  database("drivers")
    .where("id", driver_id)
    .update({ points })
    .then(driver => {
      if (driver === 0) {
        return response.status(404).json("Driver not found");
      }
      return response.status(201).json(driver);
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
});

app.post("/api/v1/team/:team_id/drivers", (request, response) => {
  const driver = { ...request.body, team_id: request.params.team_id };

  for (let requiredParam of ["name", "country", "team_id"]) {
    if (!driver[requiredParam]) {
      return response.status(422).json({ error: `Missing ${requiredParam}` });
    }
  }

  app.locals.drivers = [...app.locals.drivers, driver];

  return response.status(201).json(`succesfully added ${driver.name}`);

  // database("drivers")
  //   .insert(driver, "id")
  //   .then(driver_id => {
  //     response.status(201).json({ id: driver_id });
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error: error.message });
  //   });
});

app.delete("/api/v1/drivers/:driver_id", (request, response) => {
  const { driver_id } = request.params;

  database("races")
    .where("winner_id", driver_id)
    .del()
    .then(() => {
      database("drivers")
        .where("id", driver_id)
        .del()
        .then(driver => {
          if (driver === 0) {
            return response.status(404).json("Driver not found");
          }
          return response.status(201).json(driver);
        })
        .catch(error => {
          return response.status(500).json({ error: error.message });
        });
    });

  // if (!driver_id) return response.status(404).send("Driver not found");
});

// -- TEAMS -- //

app.get("/api/v1/teams", (request, response) => {
  database("teams")
    .select()
    .then(teams => {
      response.status(200).json(teams);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch("/api/v1/teams/:team_id/podiums", (request, response) => {
  const { podiums } = request.body;
  const { team_id } = request.params;

  if (!podiums || !team_id) {
    return response.status(244).send("unprocessable entity");
  }

  const teamToUpdate = app.locals.teams.find(team => {
    return team.name === team_id;
  });

  if (!teamToUpdate) {
    return response.status(404).send("Team not found");
  }

  teamToUpdate.podiums = podiums;

  return response.status(201).send("Success!");

  // database("teams")
  //   .where(team_id, "id")
  //   .update({ podiums: team.podiums })
  //   .then(() => {
  //     response.status(201).send("success");
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error });
  //   });
});

app.patch("/api/v1/teams/:team_id/titles", (request, response) => {
  const { titles } = request.body;
  const { team_id } = request.params;

  if (!titles) {
    return response.status(244).send("Unprocessable entity");
  }

  const teamToUpdate = app.locals.teams.find(team => {
    return team.name === team_id;
  });

  if (!teamToUpdate) {
    return response.status(404).send("Team not found");
  }

  teamToUpdate.titles = titles;

  return response.status(201).send(`Updated ${team_id} titles to ${titles}`);

  // database("teams")
  //   .where(team_id, "id")
  //   .update({ titles })
  //   .then(() => {
  //     response.status(201).send("success");
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error });
  //   });
});

app.post("/api/v1/teams", (request, response) => {
  const { name } = request.body;

  if (!name) {
    return response.status(422).json("Unprocessable Entity - no team name");
  }

  const newTeam = {
    name,
    podiums: 0,
    titles: 0
  };

  app.locals.teams = [...app.locals.teams, newTeam];

  return response.status(201).json(`Added team ${name}`);

  // database("teams")
  //   .insert(team, "id")
  //   .then(newTeam => {
  //     response.status(201).send(`Added ${newTeam} successfully`);
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error });
  //   });
  // requires - name, standing, podium finishes, titles
});

app.delete("/api/v1/teams/:team_name", (request, response) => {
  const { team_name } = request.params;

  const teamToDelete = app.locals.teams.find(team => {
    return team.name === team_name;
  });

  if (!teamToDelete) {
    return response.status(404).json(`Cannot find team ${team_name}`);
  }

  app.locals.teams = app.locals.teams.filter(team => team.name !== team_name);

  return response.status(201).json(`Succesfully deleted ${team_name}`);

  // database("teams")
  //   .where(team_id, id)
  //   .del()
  //   .then(team => {
  //     response.status(201).json(`Succesfully deleted ${team}`);
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error: error.message });
  //   });
});

// -- RACES -- //

app.get("/api/v1/races", (request, response) => {
  database("races")
    .select()
    .then(races => {
      response.status(200).json(races);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("api/v1/races?continent=:continent_name", (request, response) => {
  // requires - query
});

app.post("api/v1/races", (request, response) => {
  // requires - country, date, driver_id(winner), car, laps, time, driver_id(fastest lap), continent
});

app.delete("api/v1/race/:race_id", (request, response) => {
  // requires - valid param
});

// -- SETUP -- //

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});

module.exports = app;
