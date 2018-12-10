const dataSet = require("../../../utils/data_export/fullSet.js");

exports.seed = function(knex, Promise) {
  return knex("races")
    .del()
    .then(() => knex("drivers").del())
    .then(() => knex("teams").del())
    .then(() => {
      return Promise.all(
        dataSet.map(team => {
          return knex("teams")
            .insert(
              {
                name: team.name,
                podiums: team.podiums,
                titles: team.titles
              },
              "id"
            )
            .then(team_id => {
              let driverPromises = [];

              team.drivers.forEach(driver => {
                driverPromises.push(addDriver(knex, driver, team_id));
              });

              return Promise.all(driverPromises);
            });
        })
      );
    });
};
1;

const addDriver = (knex, driver, team_id) => {
  return knex("drivers")
    .insert(
      {
        name: driver.name,
        points: driver.points,
        country: driver.nationality,
        team_id: team_id[0]
      },
      "id"
    )
    .then(driver_id => {
      let racePromises = [];

      driver.wonRaces.forEach(race => {
        racePromises.push(addRace(knex, race, driver_id, team_id));
      });

      return Promise.all(racePromises);
    });
};

const addRace = (knex, race, driver_id, team_id) => {
  return knex("races").insert({
    name: race.name,
    laps: race.laps,
    fastest_lap: race.fastestLap,
    date: race.date,
    continent: race.continent,
    winner_id: driver_id[0],
    winning_team_id: team_id[0]
  });
};
