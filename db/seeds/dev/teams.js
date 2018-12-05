exports.seed = function(knex, Promise) {
  return knex("races")
    .del()
    .then(() => knex("drivers").del())
    .then(() => knex("teams").del())
    .then(() => {
      return Promise.all([
        knex("teams")
          .insert(
            {
              name: "Mercedes",
              podiums: "162",
              titles: "5"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Hamilton",
                points: "408",
                country: "GBR",
                team_id: team[0]
              },
              {
                name: "Bottas",
                points: "247",
                country: "FIN",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "Ferrari",
              podiums: "763",
              titles: "16"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Räikkönen",
                points: "251",
                country: "FIN",
                team_id: team[0]
              },
              {
                name: "Vettel",
                points: "320",
                country: "GER",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "Red Bull",
              podiums: "161",
              titles: "4"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Verstappen",
                points: "249",
                country: "NED",
                team_id: team[0]
              },
              {
                name: "Ricciardo",
                points: "170",
                country: "AUS",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "Renault",
              podiums: "59",
              titles: "2"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Hulkenberg",
                points: "69",
                country: "GER",
                team_id: team[0]
              },
              {
                name: "Sainz",
                points: "53",
                country: "ESP",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "Haas",
              podiums: "0",
              titles: "0"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Grosjean",
                points: "37",
                country: "FRA",
                team_id: team[0]
              },
              {
                name: "Magnussen",
                points: "56",
                country: "DEN",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "McLaren",
              podiums: "485",
              titles: "8"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Alonso",
                points: "50",
                country: "ESP",
                team_id: team[0]
              },
              {
                name: "Vandoorne",
                points: "12",
                country: "BEL",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "Force India",
              podiums: "0",
              titles: "0"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Perez",
                points: "62",
                country: "MEX",
                team_id: team[0]
              },
              {
                name: "Ocon",
                points: "49",
                country: "FRA",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "Sauber",
              podiums: "27",
              titles: "0"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Ericsson",
                points: "9",
                country: "SWE",
                team_id: team[0]
              },
              {
                name: "Leclerc",
                points: "39",
                country: "MON",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "Toro Rosso",
              podiums: "1",
              titles: "0"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Gasley",
                points: "29",
                country: "FRA",
                team_id: team[0]
              },
              {
                name: "Hartley",
                points: "4",
                country: "NZL",
                team_id: team[0]
              }
            ]);
          }),
        knex("teams")
          .insert(
            {
              name: "Williams",
              podiums: "311",
              titles: "9"
            },
            "id"
          )
          .then(team => {
            return knex("drivers").insert([
              {
                name: "Stroll",
                points: "6",
                country: "CAN",
                team_id: team[0]
              },
              {
                name: "Sirotkin",
                points: "1",
                country: "RUS",
                team_id: team[0]
              }
            ]);
          })
      ]);
    });
};
