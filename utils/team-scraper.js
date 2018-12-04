const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

var cleaner = require("./dataCleaner.js");

nightmare
  .viewport(1024, 1500)
  .goto("https://www.formula1.com/en/teams.html")
  .evaluate(() => {
    // let drivers = document.querySelectorAll("li.teamteaser-driver");
    let teamInfo = document.querySelectorAll("div.panel-left");
    let podiumsAndTitles = document.querySelectorAll("td.stat-value");
    // drivers = [].slice.call(drivers);
    teamInfo = [].slice.call(teamInfo);
    podiumsAndTitles = [].slice.call(podiumsAndTitles);
    teamInfo = teamInfo.map(team =>
      team.innerText.replace(/\n|\r/g, " ").split(" ")
    );
    podiumsAndTitles = podiumsAndTitles.map(stat => stat.innerText);

    return [teamInfo, podiumsAndTitles];
  })
  .end()
  .then(result => console.log(result))
  .catch(error => console.error("Your errror is:", error));
