const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });
const fs = require("fs");

var cleaner = require("./dataCleaner.js").teamCleaner;

nightmare
  .viewport(1024, 1500)
  .goto("https://www.formula1.com/en/teams.html")
  .evaluate(() => {
    let teamInfo = document.querySelectorAll("div.panel-left");
    let podiumsAndTitles = document.querySelectorAll("td.stat-value");

    teamInfo = [].slice.call(teamInfo);
    podiumsAndTitles = [].slice.call(podiumsAndTitles);

    podiumsAndTitles = podiumsAndTitles.map(stat => stat.innerText);
    teamInfo = teamInfo.map(team =>
      team.innerText.replace(/\n|\r/g, " ").split(" ")
    );

    return [teamInfo, podiumsAndTitles];
  })
  .end()
  .then(result => {
    let cleaned = cleaner(result[0], result[1]);
    fs.writeFileSync("./utils/data/teams.txt", cleaned, err => {
      if (err) throw err;
      console.log("file saved");
    });
  })
  .catch(error => console.error("Your errror is:", error));
