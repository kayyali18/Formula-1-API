const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

var cleaner = require("./dataCleaner.js").driverCleaner;

nightmare
  .viewport(1024, 1500)
  .goto("https://www.formula1.com/en/drivers.html")
  .evaluate(() => {
    let names = document.querySelectorAll("td.name");
    let teams = document.querySelectorAll("td.team");
    let points = document.querySelectorAll("td.points");
    let countries = document.querySelectorAll("td.county");
    names = [].slice.call(names);
    teams = [].slice.call(teams);
    points = [].slice.call(points);
    countries = [].slice.call(countries);
    names = names.map(node => node.innerText);
    teams = teams.map(node => node.innerText);
    points = points.map(node => node.innerText);
    countries = countries.map(node => node.innerText);

    return [names, teams, points, countries];
  })
  .end()
  .then(result => {
    let cleaned = cleaner(result[0], result[1], result[2], result[3]);
    console.log(cleaned);
  })
  .catch(error => console.error("Here is your error", error));
