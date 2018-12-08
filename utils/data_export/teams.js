const fs = require("fs");

const teams = {
  Mercedes: {
    drivers: [
      {
        name: "Hamilton",
        points: "408",
        nationality: "GBR",
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
      { name: "Bottas", points: "247", nationality: "FIN", wonRaces: [] }
    ],
    podiums: "162",
    titles: "5"
  },
  Ferrari: {
    drivers: [
      {
        name: "Vettel",
        points: "320",
        nationality: "GER",
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
        ]
      },
      ,
      {
        name: "Räikkönen",
        points: "251",
        nationality: "FIN",
        wonRaces: [
          {
            name: "United States",
            laps: "56",
            fastestLap: "1:34:18.643",
            date: "21 Oct 2018",
            continent: "North America"
          }
        ]
      }
    ],
    podiums: "763",
    titles: "16"
  },
  "Red Bull": {
    drivers: [
      {
        name: "Ricciardo",
        points: "170",
        nationality: "AUS",
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
        ]
      },
      {
        name: "Verstappen",
        points: "249",
        nationality: "NED",
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
        ]
      }
    ],
    podiums: "161",
    titles: "4"
  },
  Renault: {
    drivers: [
      { name: "Hulkenberg", points: "69", nationality: "GER", wonRaces: [] },
      { name: "Sainz", points: "53", nationality: "ESP", wonRaces: [] }
    ],
    podiums: "59",
    titles: "2"
  },
  Haas: {
    drivers: [
      { name: "Grosjean", points: "37", nationality: "FRA", wonRaces: [] },
      { name: "Magnussen", points: "56", nationality: "DEN", wonRaces: [] }
    ],
    podiums: "N/A",
    titles: "N/A"
  },
  McLaren: {
    drivers: [
      { name: "Alonso", points: "50", nationality: "ESP", wonRaces: [] },
      { name: "Vandoorne", points: "12", nationality: "BEL", wonRaces: [] }
    ],
    podiums: "485",
    titles: "8"
  },
  "Force India": {
    drivers: [
      { name: "Perez", points: "62", nationality: "MEX", wonRaces: [] },
      { name: "Ocon", points: "49", nationality: "FRA", wonRaces: [] }
    ],
    podiums: "N/A",
    titles: "N/A"
  },
  Sauber: {
    drivers: [
      { name: "Ericsson", points: "9", nationality: "SWE", wonRaces: [] },
      { name: "Leclerc", points: "39", nationality: "MON", wonRaces: [] }
    ],
    podiums: "27",
    titles: "N/A"
  },
  "Toro Rosso": {
    drivers: [
      { name: "Gasly", points: "29", nationality: "FRA", wonRaces: [] },
      { name: "Hartley", points: "4", nationality: "NZL", wonRaces: [] }
    ],
    podiums: "1",
    titles: "N/A"
  },
  Williams: {
    drivers: [
      { name: "Stroll", points: "6", nationality: "CAN", wonRaces: [] },
      { name: "Sirotkin", points: "1", nationality: "RUS", wonRaces: [] }
    ],
    podiums: "311",
    titles: "9"
  }
};

const keys = Object.keys(teams);

const fullData = keys.map((key, index) => {
  return { ...teams[key], name: key };
});

const stringData = JSON.stringify(fullData);

fs.writeFileSync("./fullSet.txt", stringData, function(err) {
  console.log(fullData);
  if (err) {
    return console.log(err);
  }
  console.log("done");
});
