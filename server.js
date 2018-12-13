const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

app.locals.title = "BYOBE Database";
app.locals.drivers = [];
app.locals.teams = [];

app.use(bodyParser.json(), cors());
app.use(express.static("./formula1/build"));

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
      return response
        .status(201)
        .json(`${driver} driver switched to team team_id #${team_id}`);
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
});

app.get("/api/v1/drivers/team/:team_id", (request, response) => {
  // requires - valid param
  const { team_id } = request.params;

  database("drivers")
    .where("team_id", team_id)
    .select()
    .then(driver => {
      if (driver.length > 0) {
        response.status(201).json(driver);
      } else {
        response.status(404).json(`No drivers found with team id ${team_id}`);
      }
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.patch("/api/v1/drivers/:driver_id/points", (request, response) => {
  const { driver_id } = request.params;
  const { points } = request.body;

  if (!points)
    return response
      .status(422)
      .json("Unprocessable entity - please enter a number for points");

  if (!driver_id) {
    return response.status(404).body("Driver not found");
  }

  database("drivers")
    .where("id", driver_id)
    .update({ points })
    .then(driver => {
      if (driver === 0) {
        return response.status(404).json("Driver not found");
      }
      return response
        .status(201)
        .json(`Changed points of ${driver} driver to ${points}`);
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
            return response
              .status(201)
              .json(`Added a new driver with id #${driver_id[0]}`);
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
          return response
            .status(201)
            .json(`Deleted ${driver} driver with id #${driver_id}`);
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
        return response.status(404).json("Driver not found");
      } else {
        return response
          .status(201)
          .json(`Changed ${driver} podium total to ${podiums}`);
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
        return response
          .status(201)
          .json(`Changed ${team} team's titles to ${titles}`);
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
                return response.status(404).json(`Team not found`);
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
  const { continent } = request.query;

  if (!continent) {
    database("races")
      .select()
      .then(races => {
        return response.status(200).json(races);
      })
      .catch(error => {
        return response.status(500).json({ error });
      });
  } else {
    database("races")
      .where("continent", continent)
      .select()
      .then(races => {
        return response.status(200).json(races);
      })
      .catch(error => {
        return response.status(500).json({ error });
      });
  }
});

app.post("/api/v1/races", (request, response) => {
  const {
    name,
    date,
    winner_id,
    winning_team_id,
    laps,
    fastest_lap,
    continent
  } = request.body;

  if (
    !name ||
    !date ||
    !winning_team_id ||
    !winner_id ||
    !laps ||
    !fastest_lap ||
    !continent
  ) {
    return response.status(422).json("unprocessable entity");
  }

  const newRace = {
    name,
    date,
    winner_id,
    winning_team_id,
    laps,
    fastest_lap,
    continent
  };

  database("races")
    .insert(newRace, "id")
    .then(race => {
      return response.status(201).json(`Added race ${name}`);
    })
    .catch(error => {
      return response.status(500).json({ error });
    });
});

app.get("/api/v1/races/:team_id", (request, response) => {
  const { team_id } = request.params

  database("races")
    .where("winning_team_id", team_id)
    .select()
    .then(races => {
      if (races.length) {
        return response.status(200).json(races)
      } else {
        return response.status(404).json(`Team #${team_id} not found.`)
      }
    })
});

app.delete("/api/v1/race/:country", (request, response) => {
  // requires - valid param
  const { country } = request.params;

  database("races")
    .where("name", country)
    .del()
    .then(race => {
      if (race === 0) {
        return response.status(404).json(`Race not found`);
      }
      return response.status(201).json("Success");
    })
    .catch(error => {
      return response.status(500).json({ error: error.message });
    });
});

app.get("/api/v1/races/drivers/:driver_id", (request, response) => {
  const { driver_id } = request.params;

  database("races")
    .where("winner_id", driver_id)
    .select()
    .then(races => {
      if (races.length >= 1) {
        return response.status(201).json(races);
      } else {
        return response
          .status(204)
          .json(`Driver ${driver_id} has not won any races`);
      }
    })
    .catch(error => {
      response.status(500).json(races);
    });
});

// -- SETUP -- //

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});

module.exports = app;
