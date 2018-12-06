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
      return response.status(200).json(drivers);
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
});

app.patch("/api/v1/drivers/:driver_id/team", (request, response) => {
  const { driver_id } = request.params;
  const { team_id } = request.body;

  if (typeof team_id !== "number" || !team_id) {
    return response.status(422).json(`${team_id} is not a number`);
  }

  database("drivers")
    .where("id", driver_id)
    .update({ team_id })
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
  const driver = {
    ...request.body,
    team_id: request.params.team_id,
    points: 0
  };

  for (let requiredParam of ["name", "country", "team_id"]) {
    if (!driver[requiredParam]) {
      return response.status(422).json({ error: `Missing ${requiredParam}` });
    }
  }

  database("teams")
    .where("id", driver.team_id)
    .then(team => {
      if (team.length === 0) {
        return response.status(404).json("Team does not exist");
      } else {
        database("drivers")
          .insert(driver, "id")
          .then(driver_id => {
            return response.status(201).json(driver_id[0]);
          })
          .catch(error => {
            return response.status(500).json({ error: error.message });
          });
      }
    });
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
      return response.status(200).json(teams);
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
});

app.patch("/api/v1/teams/:team_id/podiums", (request, response) => {
  const { podiums } = request.body;
  const { team_id } = request.params;

  if (!podiums || !team_id) {
    return response.status(422).json("unprocessable entity");
  }

  database("teams")
    .where("id", team_id)
    .update({ podiums })
    .then(driver => {
      if (driver === 0) {
        return response.status(404).json("Driver does not exist");
      } else {
        return response.status(201).json(driver);
      }
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
});

app.patch("/api/v1/teams/:team_id/titles", (request, response) => {
  const { titles } = request.body;
  const { team_id } = request.params;

  if (!titles || !team_id) {
    return response.status(244).json("Unprocessable entity");
  }

  database("teams")
    .where("id", team_id)
    .update({ titles })
    .then(team => {
      if (team === 0) {
        return response.status(404).json("Team not found");
      } else {
        return response.status(201).json(team);
      }
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
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

  database("teams")
    .insert(newTeam, "id")
    .then(newTeam => {
      return response.status(201).json(`Added team ${name}`);
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
});

app.delete("/api/v1/teams/:team_id", (request, response) => {
  const { team_id } = request.params;

  database("races")
    .where("winning_team_id", team_id)
    .del()
    .then(() => {
      database("drivers")
        .where("team_id", team_id)
        .del()
        .then(() => {
          database("teams")
            .where("id", team_id)
            .del()
            .then(team => {
              if (team === 0) {
                return response.status(404).json(team);
              }
              return response
                .status(201)
                .json(`Succesfully deleted ${team} team`);
            })
            .catch(error => {
              return response.status(500).json({ error: error.message });
            });
        });
    });
});

// -- RACES -- //

app.get("/api/v1/races", (request, response) => {
  database("races")
    .select()
    .then(races => {
      return response.status(200).json(races);
    })
    .catch(error => {
      return response.status(500).json({ error });
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
