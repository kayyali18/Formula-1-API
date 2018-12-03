const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const environment = process.env.NOD_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);

app.locals.title = "BYOBE Database";

app.use(bodyParser.json());
app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);

// -- DRIVERS -- //

app.get("/api/v1/drivers", (request, response) => {});

app.get("api/v1/drivers/:driver_name", (request, response) => {});

app.patch("api/v1/drivers/:driver_id/points", (request, response) => {});

app.patch("api/v1/drivers/:driver_id/standing", (request, response) => {});

app.patch("api/v1/drivers/:driver_id/team", (request, response) => {});

app.post("api/v1/drivers", (request, response) => {});

app.delete("api/v1/drivers/:driver_id", (request, response) => {});

// -- TEAMS -- //

app.get("api/v1/teams", (request, response) => {});

app.patch("api/v1/teams/:team_id/standing", (request, response) => {});

app.patch("api/v1/teams/:team_id/podium_finishes", (request, response) => {});

app.patch("api/v1/teams/:team_id/titles", (request, response) => {});

app.post("api/v1/teams", (request, response) => {});

app.delete("api/v1/teams/:team_id", (request, response) => {});

// -- RACES -- //

app.get("api/v1/races", (request, response) => {});

app.get("api/v1/races?continent=:continent_name", (request, response) => {});

app.post("api/v1/races", (request, response) => {});

app.delete("api/v1/race/:race_id", (request, response) => {});

// -- SETUP -- //

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is running on ${app.get("port")}`);
});
