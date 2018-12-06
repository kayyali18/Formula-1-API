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
            return Promise.all([
              knex("drivers")
                .insert(
                  {
                    name: "Hamilton",
                    points: "408",
                    country: "GBR",
                    team_id: team[0]
                  },
                  "id"
                )
                .then(driver => {
                  return knex("races").insert([
                    {
                      name: "Azerbaijan",
                      date: "29 Apr 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "51",
                      fastest_lap: "1:43:44.291",
                      continent: "Europe"
                    },
                    {
                      name: "Spain",
                      date: "13 May 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "66",
                      fastest_lap: "1:35:29.972",
                      continent: "Europe"
                    },
                    {
                      name: "France",
                      date: "24 Jun 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "53",
                      fastest_lap: "1:30:11.385",
                      continent: "Europe"
                    },
                    {
                      name: "Germany",
                      date: "22 Jul 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "67",
                      fastest_lap: "1:32:29.845",
                      continent: "Europe"
                    },
                    {
                      name: "Hungary",
                      date: "29 Jul 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "70",
                      fastest_lap: "1:37:16.427",
                      continent: "Europe"
                    },
                    {
                      name: "Italy",
                      date: "02 Sep 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "53",
                      fastest_lap: "1:16:54.484",
                      continent: "Europe"
                    },
                    {
                      name: "Singapore",
                      date: "16 Sep 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "61",
                      fastest_lap: "1:51:11.611",
                      continent: "Asia"
                    },
                    {
                      name: "Russia",
                      date: "30 Sep 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "53",
                      fastest_lap: "1:27:25.181",
                      continent: "Europe"
                    },
                    {
                      name: "Japan",
                      date: "07 Oct 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "53",
                      fastest_lap: "1:27:17.062",
                      continent: "Asia"
                    },
                    {
                      name: "Brazil",
                      date: "11 Nov 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "71",
                      fastest_lap: "1:27:09.066",
                      continent: "South America"
                    },
                    {
                      name: "Abu Dhabi",
                      date: "25 Nov 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "55",
                      fastest_lap: "1:39:40.382",
                      continent: "Asia"
                    }
                  ]);
                }),
              knex("drivers").insert({
                name: "Bottas",
                points: "247",
                country: "FIN",
                team_id: team[0]
              })
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
            return Promise.all([
              knex("drivers")
                .insert(
                  {
                    name: "Räikkönen",
                    points: "251",
                    country: "FIN",
                    team_id: team[0]
                  },
                  "id"
                )
                .then(driver => {
                  return knex("races").insert([
                    {
                      name: "USA",
                      date: "21 Oct 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "56",
                      fastest_lap: "1:34:18.643",
                      continent: "North America"
                    }
                  ]);
                }),
              knex("drivers")
                .insert(
                  {
                    name: "Vettel",
                    points: "320",
                    country: "GER",
                    team_id: team[0]
                  },
                  "id"
                )
                .then(driver => {
                  return knex("races").insert([
                    {
                      name: "Australia",
                      date: "25 Mar 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "58",
                      fastest_lap: "1:29:33.283",
                      continent: "Oceania"
                    },
                    {
                      name: "Bahrain",
                      date: "08 Apr 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "57",
                      fastest_lap: "1:32:01.940",
                      continent: "Asia"
                    },
                    {
                      name: "Canada",
                      date: "10 Jun 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "68",
                      fastest_lap: "1:28:31.377",
                      continent: "North America"
                    },
                    {
                      name: "Great Britain",
                      date: "08 Jul 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "52",
                      fastest_lap: "1:27:29.784",
                      continent: "Europe"
                    },
                    {
                      name: "Belgium",
                      date: "26 Aug 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "44",
                      fastest_lap: "1:23:34.476",
                      continent: "Europe"
                    }
                  ]);
                })
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
            Promise.all([
              knex("drivers")
                .insert(
                  {
                    name: "Verstappen",
                    points: "249",
                    country: "NED",
                    team_id: team[0]
                  },
                  "id"
                )
                .then(driver => {
                  return knex("races").insert([
                    {
                      name: "Austria",
                      date: "01 Jul 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "71",
                      fastest_lap: "1:21:56.024",
                      continent: "Europe"
                    },
                    {
                      name: "Mexico",
                      date: "28 Oct 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "71",
                      fastest_lap: "1:38:28.851",
                      continent: "North America"
                    }
                  ]);
                }),
              knex("drivers")
                .insert(
                  {
                    name: "Ricciardo",
                    points: "170",
                    country: "AUS",
                    team_id: team[0]
                  },
                  "id"
                )
                .then(driver => {
                  knex("races").insert([
                    {
                      name: "China",
                      date: "15 Apr 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "56",
                      fastest_lap: "1:35:36.380",
                      continent: "Asia"
                    },
                    {
                      name: "Monaco",
                      date: "27 May 2018",
                      winner_id: driver[0],
                      winning_team_id: team[0],
                      laps: "78",
                      fastest_lap: "1:42:54.807",
                      continent: "Europe"
                    }
                  ]);
                })
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
