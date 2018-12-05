const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });
const fs = require("fs");

var cleaner = require("./dataCleaner.js").gpCleaner;

nightmare
  .viewport(1025, 1500)
  .goto("https://www.formula1.com/en/results.html")
  .evaluate(() => {
    let info = document.querySelectorAll("tbody tr");
    info = [].slice.call(info);

    info = info.map(GP =>
      GP.innerText.replace(/\t|\r/g, "hello").split("hello")
    );
    // console.log(info);

    return info;
  })
  .end()
  .then(result => {
    let cleaned = cleaner(result);
    console.log(cleaned);
  });
