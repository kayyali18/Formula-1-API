const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

var cleaner = require("./dataCleaner.js");

nightmare
  .viewport(1024, 1500)
  .goto("https://www.formula1.com/en/teams.html")
  .evaluate(() => {
    let drivers = document.querySelectorAll("li.teamteaser-driver");
    let podiumsAndTitles = document.querySelectorAll("td.stat-value");
    drivers = [].slice.call(drivers);
    podiumsAndTitles = [].slice.call(podiumsAndTitles);
    drivers = drivers.map(driver => driver.innerText);
    podiumsAndTitles = podiumsAndTitles.map(stat => stat.innerText);

    return [drivers, podiumsAndTitles];
  })
  .end()
  .then(result => console.log(result))
  .catch(error => console.error("Your errror is:", error));
