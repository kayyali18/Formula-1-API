const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });
const fs = require("fs");

var cleaner = require("./dataCleaner.js").driverCleaner;

nightmare
  .viewport(1024, 1600)
  .goto("https://www.formula1.com/en/results.html/2018/drivers.html")
  .evaluate(() => {
    let info = document.querySelectorAll("tbody tr");
    info = [].slice.call(info);

    info = info.map(driver =>
      driver.innerText.replace(/\t|\r/g, " ").split(" ")
    );

    return info;
  })
  .end()
  .then(result => {
    console.log(result);
    let cleaned = cleaner(result);
    fs.writeFileSync("./utils/data/drivers.txt", cleaned, err => {
      if (err) throw err;
      console.log("file saved");
    });
  })
  .catch(error => console.error("Here is your error", error));
