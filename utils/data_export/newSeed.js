const dataSet = require("./fullSet.js");

exports.seed = function(knex, Promise) {
  return knex("races")
    .del()
    .then(() => knex("drivers").del())
    .then(() => knex("teams").del())
    .then(() => {
      return Promise.all([
        dataSet.forEach(team => {
          knex("teams")
            .insert(
              {
                name: team.name,
                podiums: team.podiums,
                titles: team.titles
              },
              "id"
            )
            .then(team => {
              team.drivers
                .forEach(driver => {
                  knex("drivers").insert(
                    {
                      name: driver.name,
                      points: driver.points,
                      country: driver.nationality,
                      team_id: team[0]
                    },
                    "id"
                  );
                })
                .then(driver => {
                  driver.wonRaces.forEach(race => {
                    knex("races").insert({
                      name: race.name,
                      laps: race.laps,
                      fastest_lap: race.fastestLap,
                      date: race.lap,
                      continent: race.continent,
                      winner_id: driver[0],
                      winning_team_id: team[0]
                    });
                  });
                });
            });
        })
      ]);
    });
};
