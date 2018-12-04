const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// const environment = process.env.NOD_ENV || "development";
// const configuration = require("./knexfile")[environment];
// const database = require("knex")(configuration);

app.locals.title = "BYOBE Database";
app.locals.drivers = [];

app.use(bodyParser.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);

// -- DRIVERS -- //

app.get("/api/v1/drivers", (request, response) => {
  return response.status(200).json(app.locals.drivers);
  // database("drivers")
  //   .select()
  //   .then(drivers => {
  //     response.status(200).json(drivers);
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error });
  //   });
});

app.get("api/v1/drivers/:driver_name", (request, response) => {
  // requires - valid param
  const { driver_name } = request.params;

  if (typeof driver_name !== "string") {
    response.status(422).send("unprocessable entity");
  }

  database("drivers")
    .where(driver_name, "name")
    .select()
    .then(driver => {
      if (driver) {
        response.status(200).json(driver);
      } else {
        response.status(404).json();
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch("/api/v1/drivers/:driver_id/points", (request, response) => {
  const { driver_id } = request.params;
  const { points } = request.body;

  const driver = app.locals.drivers.find(driver => {
    return (driver.id = driver_id);
  });

  if (!driver) {
    return response.status(404).send("Driver not found");
  }

  driver.points = points;

  return response.status(201).send("changed");

  // database("drivers")
  //   .where(driver_id, "id")
  //   .update({ points })
  //   .then(driver => {
  //     if (driver) {
  //       response.status(200).json(driver);
  //     } else {
  //       response.status(404).json({ error });
  //     }
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error });
  //   });
});

app.patch("/api/v1/drivers/:driver_id/team", (request, response) => {
  const { driver_id } = request.params;
  const { team_id } = request.body;

  const driver = app.locals.drivers.find(driver => driver.id == driver_id);

  if (typeof team_id !== "string") {
    return response.status(422).send(`${team_id} is not a string`);
  }

  if (!driver) {
    return response.status(404).send("Driver not found");
  }

  driver.team_id = team_id;

  return response.status(201).json(driver.team);

  // database("drivers")
  //   .where(driver_id, "id")
  //   .update({ team })
  //   .then(driver => {
  //     if (driver) {
  //       response.status(200).json(driver);
  //     } else {
  //       response.status(404).json({ error });
  //     }
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error });
  //   });
  // // requires - valid param, body
});

app.post("/api/v1/team/:team_id/drivers", (request, response) => {
  const driver = { ...request.body, team_id: request.params.team_id };

  for (let requiredParam of ["name", "country", "team_id"]) {
    if (!driver[requiredParam]) {
      return response.status(422).json({ error: `Missing ${requiredParam}` });
    }
  }

  app.locals.drivers = [...app.locals.drivers, driver];

  return response
    .status(201)
    .json({ message: `succesfully added ${driver.name}` });

  // database("drivers")
  //   .insert(driver, "id")
  //   .then(driver_id => {
  //     response.status(201).json({ id: driver_id });
  //   })
  //   .catch(error => {
  //     response.status(500).json({ error: error.message });
  //   });
});

app.delete("api/v1/drivers/:driver_id", (request, response) => {
  const { driver_id } = request.params;

  if (typeof driver_id !== "number") {
    response.status(422).send("unprocessable entity");
  }

  database("drivers")
    .where(driver_id, id)
    .del()
    .then(driver => {
      response.status(201).json(`Succesfully deleted ${driver}`);
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});

// -- TEAMS -- //

app.get("api/v1/teams", (request, response) => {
  // requires - valid param
  database("teams")
    .select()
    .then(teams => {
      response.status(200).json(teams);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch("api/v1/teams/:team_id/standing", (request, response) => {
  const team = { ...response.body, team_id: request.params.team_id };

  for (let requiredParam of [standing, team_id]) {
    if (!team[requiredParam]) {
      response.status(244).send("unprocessable entity");
    }
  }

  database("teams")
    .where(team_id, "id")
    .update({ standing })
    .then(() => {
      response.status(201).send("success");
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch("api/v1/teams/:team_id/podium_finishes", (request, response) => {
  const team = { ...response.body, team_id: request.params.team_id };

  for (let requiredParam of [podium_finishes, team_id]) {
    if (!team[requiredParam]) {
      response.status(244).send("unprocessable entity");
    }
  }

  database("teams")
    .where(team_id, "id")
    .update({ podium_finishes })
    .then(() => {
      response.status(201).send("success");
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch("api/v1/teams/:team_id/titles", (request, response) => {
  const team = { ...response.body, team_id: request.params.team_id };

  for (let requiredParam of [titles, team_id]) {
    if (!team[requiredParam]) {
      response.status(244).send("unprocessable entity");
    }
  }

  database("teams")
    .where(team_id, "id")
    .update({ titles })
    .then(() => {
      response.status(201).send("success");
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post("api/v1/teams", (request, response) => {
  const team = response.body;

  for (let requiredParam of [name, standing, podium_finishes, titles]) {
    if (!team[requiredParam]) {
      response.status(244).send("unprocessable entity");
    }
  }

  database("teams")
    .insert(team, "id")
    .then(newTeam => {
      response.status(201).send(`Added ${newTeam} successfully`);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
  // requires - name, standing, podium finishes, titles
});

app.delete("api/v1/team/:team", (request, response) => {
  const { team } = request.params;

  if (typeof team !== "number") {
    response.status(422).send("unprocessable entity");
  }

  database("teams")
    .where(team_id, id)
    .del()
    .then(team => {
      response.status(201).json(`Succesfully deleted ${team}`);
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});

// -- RACES -- //

app.get("api/v1/races", (request, response) => {});

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
