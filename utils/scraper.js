const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

var cleaner = require("./dataCleaner.js");

nightmare
  .viewport(1024, 1500)
  .goto("https://www.formula1.com/en.html")
  .click('a[href="/en/drivers.html"]')
  .evaluate(() => {
    let names = document.querySelectorAll("td.name");
    let teams = document.querySelectorAll("td.team");
    let points = document.querySelectorAll("td.points");
    names = [].slice.call(names);
    teams = [].slice.call(teams);
    points = [].slice.call(points);
    names = names.map(node => node.innerText);
    teams = teams.map(node => node.innerText);
    points = points.map(node => node.innerText);

    return [names, teams, points];
  })
  .end()
  .then(result => {
    console.log(result);
    let cleaned = cleaner(result[0], result[1], result[2]);
    console.log(cleaned);
  })
  .catch(error => console.error("Here is your error", error));
