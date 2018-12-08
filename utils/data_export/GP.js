const gps = {
  Australia: {
    date: "25 Mar 2018",
    winner: "Sebastian Vettel",
    team: "FERRARI",
    laps: "58",
    fastLap: "1:29:33.283",
    continent: "Australia"
  },
  Bahrain: {
    date: "08 Apr 2018",
    winner: "Sebastian Vettel",
    team: "FERRARI",
    laps: "57",
    fastLap: "1:32:01.940",
    continent: "Asia"
  },
  China: {
    date: "15 Apr 2018",
    winner: "Daniel Ricciardo",
    team: "RED BULL RACING TAG HEUER",
    laps: "56",
    fastLap: "1:35:36.380",
    continent: "Asia"
  },
  Azerbaijan: {
    date: "29 Apr 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "51",
    fastLap: "1:43:44.291",
    continent: "Europe"
  },
  Spain: {
    date: "13 May 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "66",
    fastLap: "1:35:29.972",
    continent: "Europe"
  },
  Monaco: {
    date: "27 May 2018",
    winner: "Daniel Ricciardo",
    team: "RED BULL RACING TAG HEUER",
    laps: "78",
    fastLap: "1:42:54.807",
    continent: "Europe"
  },
  Canada: {
    date: "10 Jun 2018",
    winner: "Sebastian Vettel",
    team: "FERRARI",
    laps: "68",
    fastLap: "1:28:31.377",
    continent: "North America"
  },
  France: {
    date: "24 Jun 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "53",
    fastLap: "1:30:11.385",
    continent: "Europe"
  },
  Austria: {
    date: "01 Jul 2018",
    winner: "Max Verstappen",
    team: "RED BULL RACING TAG HEUER",
    laps: "71",
    fastLap: "1:21:56.024",
    continent: "Europe"
  },
  "Great Britain": {
    date: "08 Jul 2018",
    winner: "Sebastian Vettel",
    team: "FERRARI",
    laps: "52",
    fastLap: "1:27:29.784",
    continent: "Europe"
  },
  Germany: {
    date: "22 Jul 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "67",
    fastLap: "1:32:29.845",
    continent: "Europe"
  },
  Hungary: {
    date: "29 Jul 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "70",
    fastLap: "1:37:16.427",
    continent: "Europe"
  },
  Belgium: {
    date: "26 Aug 2018",
    winner: "Sebastian Vettel",
    team: "FERRARI",
    laps: "44",
    fastLap: "1:23:34.476",
    continent: "Europe"
  },
  Italy: {
    date: "02 Sep 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "53",
    fastLap: "1:16:54.484",
    continent: "Europe"
  },
  Singapore: {
    date: "16 Sep 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "61",
    fastLap: "1:51:11.611",
    continent: "Asia"
  },
  Russia: {
    date: "30 Sep 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "53",
    fastLap: "1:27:25.181",
    continent: "Europe"
  },
  Japan: {
    date: "07 Oct 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "53",
    fastLap: "1:27:17.062",
    continent: "Asia"
  },
  "United States": {
    date: "21 Oct 2018",
    winner: "Kimi Räikkönen",
    team: "FERRARI",
    laps: "56",
    fastLap: "1:34:18.643",
    continent: "North America"
  },
  Mexico: {
    date: "28 Oct 2018",
    winner: "Max Verstappen",
    team: "RED BULL RACING TAG HEUER",
    laps: "71",
    fastLap: "1:38:28.851",
    continent: "North America"
  },
  Brazil: {
    date: "11 Nov 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "71",
    fastLap: "1:27:09.066",
    continent: "South Ameria"
  },
  "Abu Dhabi": {
    date: "25 Nov 2018",
    winner: "Lewis Hamilton",
    team: "MERCEDES",
    laps: "55",
    fastLap: "1:39:40.382",
    continent: "Asia"
  }
};

const keys = Object.keys(gps);

const hamilton = keys.filter(race => {
  return gps[race].winner === "Kimi Räikkönen";
});

const wonRaces = hamilton.reduce((accu, race) => {
  const raceStats = {
    name: race,
    laps: gps[race].laps,
    fastestLap: gps[race].fastLap,
    date: gps[race].date,
    continent: gps[race].continent
  };

  accu.push(raceStats);
  return accu;
}, []);

console.log(wonRaces);

// console.log(
//   hamilton.map((race, index) => {
//     return {
//       name: Object.keys(gps)[index],
//       date: gps[race].date,
//       laps: gps[race].laps,
//       fastestLap: gps[race].fastLap
//     };
//   })
// );
