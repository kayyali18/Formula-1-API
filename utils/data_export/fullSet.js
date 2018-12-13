const fullSet = [
  {
    drivers: [
      {
        name: "Hamilton",
        points: "408",
        nationality: "GBR",
        driver_number: "#44",
        wonRaces: [
          {
            name: "Azerbaijan",
            laps: "51",
            fastestLap: "1:43:44.291",
            date: "29 Apr 2018",
            continent: "Europe"
          },
          {
            name: "Spain",
            laps: "66",
            fastestLap: "1:35:29.972",
            date: "13 May 2018",
            continent: "Europe"
          },
          {
            name: "France",
            laps: "53",
            fastestLap: "1:30:11.385",
            date: "24 Jun 2018",
            continent: "Europe"
          },
          {
            name: "Germany",
            laps: "67",
            fastestLap: "1:32:29.845",
            date: "22 Jul 2018",
            continent: "Europe"
          },
          {
            name: "Hungary",
            laps: "70",
            fastestLap: "1:37:16.427",
            date: "29 Jul 2018",
            continent: "Europe"
          },
          {
            name: "Italy",
            laps: "53",
            fastestLap: "1:16:54.484",
            date: "02 Sep 2018",
            continent: "Europe"
          },
          {
            name: "Singapore",
            laps: "61",
            fastestLap: "1:51:11.611",
            date: "16 Sep 2018",
            continent: "Asia"
          },
          {
            name: "Russia",
            laps: "53",
            fastestLap: "1:27:25.181",
            date: "30 Sep 2018",
            continent: "Europe"
          },
          {
            name: "Japan",
            laps: "53",
            fastestLap: "1:27:17.062",
            date: "07 Oct 2018",
            continent: "Asia"
          },
          {
            name: "Brazil",
            laps: "71",
            fastestLap: "1:27:09.066",
            date: "11 Nov 2018",
            continent: "South Ameria"
          },
          {
            name: "Abu Dhabi",
            laps: "55",
            fastestLap: "1:39:40.382",
            date: "25 Nov 2018",
            continent: "Asia"
          }
        ]
      },
      { name: "Bottas", points: "247", nationality: "FIN", driver_number: "#77", wonRaces: []}
    ],
    podiums: "162",
    titles: "5",
    name: "Mercedes"
  },
  {
    drivers: [
      {
        name: "Vettel",
        points: "320",
        nationality: "GER",
        driver_number: "#5",
        wonRaces: [
          {
            name: "Australia",
            laps: "58",
            fastestLap: "1:29:33.283",
            date: "25 Mar 2018",
            continent: "Australia"
          },
          {
            name: "Bahrain",
            laps: "57",
            fastestLap: "1:32:01.940",
            date: "08 Apr 2018",
            continent: "Asia"
          },
          {
            name: "Canada",
            laps: "68",
            fastestLap: "1:28:31.377",
            date: "10 Jun 2018",
            continent: "North America"
          },
          {
            name: "Great Britain",
            laps: "52",
            fastestLap: "1:27:29.784",
            date: "08 Jul 2018",
            continent: "Europe"
          },
          {
            name: "Belgium",
            laps: "44",
            fastestLap: "1:23:34.476",
            date: "26 Aug 2018",
            continent: "Europe"
          }
        ],
      },
      {
        name: "Räikkönen",
        points: "251",
        nationality: "FIN",
        driver_number: "#7",
        wonRaces: [
          {
            name: "United States",
            laps: "56",
            fastestLap: "1:34:18.643",
            date: "21 Oct 2018",
            continent: "North America"
          }
        ],
      }
    ],
    podiums: "763",
    titles: "16",
    name: "Ferrari"
  },
  {
    drivers: [
      {
        name: "Ricciardo",
        points: "170",
        nationality: "AUS",
        driver_number: '#3',
        wonRaces: [
          {
            name: "China",
            laps: "56",
            fastestLap: "1:35:36.380",
            date: "15 Apr 2018",
            continent: "Asia"
          },
          {
            name: "Monaco",
            laps: "78",
            fastestLap: "1:42:54.807",
            date: "27 May 2018",
            continent: "Europe"
          }
        ],
      },
      {
        name: "Verstappen",
        points: "249",
        nationality: "NED",
        driver_number: "#3",
        wonRaces: [
          {
            name: "Austria",
            laps: "71",
            fastestLap: "1:21:56.024",
            date: "01 Jul 2018",
            continent: "Europe"
          },
          {
            name: "Mexico",
            laps: "71",
            fastestLap: "1:38:28.851",
            date: "28 Oct 2018",
            continent: "North America"
          }
        ],
      }
    ],
    podiums: "161",
    titles: "4",
    name: "Red Bull"
  },
  {
    drivers: [
      { name: "Hulkenberg", points: "69", nationality: "GER", driver_number: "#7", wonRaces: []},
      { name: "Sainz", points: "53", nationality: "ESP", driver_number: "#55", wonRaces: []}
    ],
    podiums: "59",
    titles: "2",
    name: "Renault"
  },
  {
    drivers: [
      { name: "Grosjean", points: "37", nationality: "FRA",  driver_number: "#8",  wonRaces: []},
      { name: "Magnussen", points: "56", nationality: "DEN", driver_number: "#20", wonRaces: [] }
    ],
    podiums: "0",
    titles: "0",
    name: "Haas"
  },
  {
    drivers: [
      { name: "Alonso", points: "50", nationality: "ESP", driver_number: "#14", wonRaces: [] },
      { name: "Vandoorne", points: "12", nationality: "BEL", driver_number: "#2", wonRaces: []}
    ],
    podiums: "485",
    titles: "8",
    name: "McLaren"
  },
  {
    drivers: [
      { name: "Perez", points: "62", nationality: "MEX", driver_number: "#11", wonRaces: [] },
      { name: "Ocon", points: "49", nationality: "FRA", driver_number: "#31", wonRaces: [] }
    ],
    podiums: "0",
    titles: "0",
    name: "Force India"
  },
  {
    drivers: [
      { name: "Ericsson", points: "9", nationality: "SWE", driver_number: "#9", wonRaces: [] },
      { name: "Leclerc", points: "39", nationality: "MON", driver_number: "#16", wonRaces: [] }
    ],
    podiums: "27",
    titles: "0",
    name: "Sauber"
  },
  {
    drivers: [
      { name: "Gasly", points: "29", nationality: "FRA", driver_number: "#10", wonRaces: [] },
      { name: "Hartley", points: "4", nationality: "NZL", driver_number: "#10", wonRaces: [] }
    ],
    podiums: "1",
    titles: "0",
    name: "Toro Rosso"
  },
  {
    drivers: [
      { name: "Stroll", points: "6", nationality: "CAN", driver_number: "#18", wonRaces: [] },
      { name: "Sirotkin", points: "1", nationality: "RUS", driver_number: "#35", wonRaces: [] }
    ],
    podiums: "311",
    titles: "9",
    name: "Williams"
  }
];

module.exports = fullSet;
