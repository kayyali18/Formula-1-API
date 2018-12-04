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

module.exports.driverCleaner = driverCleaner;
module.exports.teamCleaner = teamCleaner;
