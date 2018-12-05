function driverCleaner(info) {
  let cleaned = info.reduce((acc, driver, index) => {
    let name = driver[1];
    acc[name] = {
      driver_id: driver[0],
      points: driver[driver.length - 1],
      nationality: driver[2],
      team_id: "foreign_id"
    };

    return acc;
  }, {});

  return JSON.stringify(cleaned);
}

function teamCleaner(teams, stats) {
  teams = teams.reduce((acc, team, index) => {
    let myIndex = index * 2;
    let name;

    if (team.length == 8) {
      name = team[0];

      acc[name] = {
        drivers: [`${team[3]} ${team[4]}`, `${team[5]} ${team[6]}`],
        podiums: stats[myIndex],
        titles: stats[myIndex + 1]
      };
    } else {
      name = `${team[0]} ${team[1]}`;

      acc[name] = {
        drivers: [`${team[4]} ${team[5]}`, `${team[6]} ${team[7]}`],
        podiums: stats[myIndex],
        titles: stats[myIndex + 1]
      };
    }

    return acc;
  }, {});

  return JSON.stringify(teams);
}

function gpCleaner(GP) {
  GP = GP.reduce((acc, race) => {
    let country = race[0];
    let date = race[1];
    let winner = race[2];
    let team = race[3];
    let laps = race[4];
    let fastLap = race[5];

    acc[country] = { date, winner, team, laps, fastLap };
    return acc;
  }, {});

  return GP;
}

module.exports.driverCleaner = driverCleaner;
module.exports.teamCleaner = teamCleaner;

module.exports.gpCleaner = gpCleaner;
