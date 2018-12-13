process.env.NODE_ENV = "test";
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../server.js");
const configuration = require("../knexfile")["test"];
const database = require("knex")(configuration);

describe("Server file", () => {
  after(done => {
    database.migrate
      .rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run())
      .then(() =>
        console.log("Testing complete. Database rolled back and reseeded")
      )
      .then(() => done());
  });

  describe("/api/v1/drivers", () => {
    beforeEach(done => {
      database.migrate
        .rollback()
        .then(() => database.migrate.latest())
        .then(() => database.seed.run())
        .then(() => done());
    });

    it("should return a 200 status code", done => {
      const expectedOne = {
        name: "Bottas",
        points: 247,
        country: "FIN"
      };

      const expectedTwo = {
        name: "Magnussen",
        points: 56,
        country: "DEN"
      };

      chai
        .request(app)
        .get("/api/v1/drivers")
        .end((error, response) => {
          expect(response).to.have.status(200);
          const bottas = response.body.find(driver => driver.name === "Bottas");
          expect(bottas.points).to.equal(expectedOne.points);
          expect(bottas.country).to.equal(expectedOne.country);
          const magnussen = response.body.find(
            driver => driver.name === "Magnussen"
          );
          expect(magnussen.points).to.equal(expectedTwo.points);
          expect(magnussen.country).to.equal(expectedTwo.country);
          expect(response.body.length).to.equal(20);
          done();
        });
    });
  });

  describe("Driver endpoints", () => {
    describe("/api/v1/drivers:team_id - get", () => {
      it("should get drivers by team_id", done => {
        const expected = 2;

        chai
          .request(app)
          .get("/api/v1/teams")
          .then(response => {
            const teams = response.body;

            const mercedes = teams.find(team => team.name === "Mercedes");

            return mercedes.id;
          })
          .then(id => {
            chai
              .request(app)
              .get(`/api/v1/drivers/team/${id}`)
              .end((error, response) => {
                expect(response).to.have.status(201);
                expect(response.body.length).to.equal(2);

                const drivers = response.body;

                if (drivers[0].name === "Bottas") {
                  expect(drivers[1].name).to.equal("Hamilton");
                } else {
                  expect(drivers[0].name).to.equal("Hamilton");
                  expect(drivers[1].name).to.equal("Bottas");
                }
                done();
              });
          });
      });

      it("should return no drivers if team does not exist", done => {
        const expected = "No drivers found with team id 32";

        chai
          .request(app)
          .get("/api/v1/drivers/team/32")
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.body).to.equal(expected);
            done();
          });
      });
    });

    describe("/api/v1/drivers/:driver_id/team", () => {
      it("should patch team", done => {
        const body = { team_id: 2 };
        const expected = "1 driver switched to team team_id #2";

        chai
          .request(app)
          .patch("/api/v1/drivers/1/team")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.equal(expected);
            done();
          });
      });

      it("should return 404 if the driver does not exist", done => {
        const body = { team_id: 2 };

        const expected = "Driver not found";

        chai
          .request(app)
          .patch("/api/v1/drivers/30/team")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.body).to.equal(expected);
            done();
          });
      });

      it("should return 422 if the team_id is not a number", done => {
        const body = { team_id: "Hello" };

        chai
          .request(app)
          .patch("/api/v1/drivers/1/team")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(422);
            expect(response.body).to.equal("Hello is not a number");
            done();
          });
      });

      describe("/api/v1/drivers/:driver_id/points", () => {
        it("should update points properly", done => {
          const body = { points: 89 };

          const expected = "Changed points of 1 driver to 89";

          chai
            .request(app)
            .patch("/api/v1/drivers/4/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(201);
              expect(response.body).to.equal(expected);
              done();
            });
        });

        it("should return 404 if the driver is not found", done => {
          const body = { points: 89 };

          const expected = "Driver not found";

          chai
            .request(app)
            .patch("/api/v1/drivers/21/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(404);
              expect(response.body).to.equal(expected);
              done();
            });
        });

        it("should return 422 if the body has no points", done => {
          const body = { carrots: 89 };

          const expected =
            "Unprocessable entity - please enter a number for points";

          chai
            .request(app)
            .patch("/api/v1/drivers/4/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(422);
              expect(response.body).to.equal(expected);
              done();
            });
        });
      });

      describe("api/v1/:team_id/drivers - add driver", () => {
        it("should add a driver", done => {
          const driver = {
            name: "Jim",
            country: "USA"
          };

          expected = "Added a new driver with id #21";

          chai
            .request(app)
            .post("/api/v1/team/5/drivers")
            .send(driver)
            .end((error, response) => {
              expect(response).to.have.status(201);
              expect(response.body).to.equal(expected);
              done();
            });
        });

        it("should return 404 if the team does not exist", done => {
          const driver = {
            name: "Jim",
            country: "USA"
          };

          chai
            .request(app)
            .post("/api/v1/team/22/drivers")
            .send(driver)
            .end((error, response) => {
              expect(response).to.have.status(404);
              expect(response.body).to.equal("Team does not exist");
              done();
            });
        });

        it("should return 422 if missing paramets", done => {
          const driver = {
            name: "Bobby"
          };

          chai
            .request(app)
            .post("/api/v1/team/22/drivers")
            .send(driver)
            .end((error, response) => {
              expect(response).to.have.status(422);
              expect(response.body).to.deep.equal({ error: "Missing country" });
              done();
            });
        });
      });

      describe("/api/v1/drivers/:driver_id - delete", () => {
        it("should delete a driver", done => {
          const expected = "Deleted 1 driver with id #4";

          chai
            .request(app)
            .delete("/api/v1/drivers/4")
            .end((error, response) => {
              expect(response).to.have.status(201);
              expect(response.body).to.equal(expected);
              done();
            });
        });

        it("should return 404 if driver not found", done => {
          const expected = "Not Found";
          chai
            .request(app)
            .delete("/api/v1/driver/30")
            .end((error, response) => {
              expect(response).to.have.status(404);
              expect(response.res.statusMessage).to.equal(expected);
              done();
            });
        });
      });
    });
  });

  describe("Race endpoints", () => {
    beforeEach(done => {
      database.migrate
        .rollback()
        .then(() => database.migrate.latest())
        .then(() => database.seed.run())
        .then(() => done());
    });
    it("should get all grand prix", done => {
      chai
        .request(app)
        .get("/api/v1/races")
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.length).to.equal(21);
          expect(response.body[0].name).to.be.a("string");
          expect(response.body[1].winning_team_id).to.be.a("number");
          expect(response.body[2].winner_id).to.be.a("number");
          expect(response.body[3].date).to.be.a("string");
          expect(response.body[4].continent).to.be.a("string");
          expect(response.body[5].laps).to.be.a("number");
          expect(response.body[6].id).to.be.a("number");
          expect(response.body[7].fastest_lap).to.be.a("string");
          expect(response.body[8].created_at).to.be.a("string");
          expect(response.body[9].updated_at).to.be.a("string");
          done();
        });
    });

    it("should return the races that match the continent", done => {
      chai
        .request(app)
        .get("/api/v1/races?continent=Europe")
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.length).to.equal(11);
          expect(response.body[0].name).to.be.a("string");
          expect(response.body[1].winning_team_id).to.be.a("number");
          expect(response.body[2].winner_id).to.be.a("number");
          expect(response.body[3].date).to.be.a("string");
          expect(response.body[4].continent).to.be.a("string");
          expect(response.body[5].laps).to.be.a("number");
          expect(response.body[6].id).to.be.a("number");
          expect(response.body[7].fastest_lap).to.be.a("string");
          expect(response.body[8].created_at).to.be.a("string");
          expect(response.body[9].updated_at).to.be.a("string");
          done();
        });
    });

    it("should return a 422 if a new race is incomplete", done => {
      const body = { name: "Ahmad", date: null };
      chai
        .request(app)
        .post("/api/v1/races")
        .send(body)
        .end((error, response) => {
          expect(response).to.have.status(422);
          expect(response.body).to.equal("unprocessable entity");
          done();
        });
    });

    it("should succesfully add a new race", done => {
      const body = {
        name: "Dead Sea",
        date: "Yesterday",
        winner_id: "7",
        winning_team_id: 2,
        laps: 58,
        fastest_lap: "1:09:543",
        continent: "Asia"
      };

      chai
        .request(app)
        .post("/api/v1/races")
        .send(body)
        .end((error, response) => {
          expect(response).to.have.status(201);
          expect(response.body).to.equal("Added race Dead Sea");
          done();
        });
    });

    describe("/api/v1/race - DELETE", () => {
      it("should delete a race", done => {
        chai
          .request(app)
          .delete("/api/v1/race/Belgium")
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.equal("Success");
            done();
          });
      });

      it("should return 404 if race not found", done => {
        chai
          .request(app)
          .delete("/api/v1/race/blahblah")
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.body).to.equal("Race not found");
            done();
          });
      });
    });

    describe("/api/v1/races/:team_id", () => {
      it("should return 200 status and return all applicable races on successful GET request", (done) => {

        chai 
          .request(app)
          .get('/api/v1/teams')
          .then(response => {
            const mercedes = response.body.find(team => team.name === 'Mercedes')
          })
          done()
          .then( id => {
            chai
            .request(app)
            .get(`/api/v1/races/$${id}`)
            .end((error, response) => {
              expect(response).to.have.status(200);
              expect(response.body.length).to.equal(6); //THIS SHOULD EVALUATE THE RESPONSE OBJECT
              expect(response.body[0].id).to.be.a("number");
              expect(response.body[1].name).to.be.a("string");
              expect(response.body[2].date).to.be.a("string");
              expect(response.body[3].winner_id).to.be.a("number");
              expect(response.body[4].winning_team_id).to.be.a("number");
              expect(response.body[5].laps).to.be.a("number");
              expect(response.body[0].fastest_lap).to.be.a("string");
              expect(response.body[1].created_at).to.be.a("string");
              expect(response.body[2].updated_at).to.be.a("string");
              expect(response.body[3].continent).to.be.a("string");
              done();
            });
          })
        
      });

      it("Should return a status of 404 and error message on unsuccessful GET request", (done) => {
        chai
          .request(app)
          .get("/api/v1/races/22")
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.body).to.equal('Team #22 not found.');
            done();
          });
      });
    });
  });

  describe("Team endpoints", () => {
    beforeEach(done => {
      database.migrate
        .rollback()
        .then(() => database.migrate.latest())
        .then(() => database.seed.run())
        .then(() => done());
    });
    it("should get all teams", done => {
      chai
        .request(app)
        .get("/api/v1/teams")
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.length).to.equal(10); //THIS SHOULD EVALUATE THE RESPONSE OBJECT
          expect(response.body[0].id).to.be.a("number");
          expect(response.body[1].titles).to.be.a("number");
          expect(response.body[2].created_at).to.be.a("string");
          expect(response.body[3].updated_at).to.be.a("string");
          expect(response.body[4].podiums).to.be.a("number");
          expect(response.body[5].name).to.be.a("string");
          done();
        });
    });

    describe("api/v1/teams/:team_id/podiums", () => {
      it("should update team podiums", done => {
        const body = { podiums: 3 };

        const expected = "Changed 1 podium total to 3";

        chai
          .request(app)
          .patch("/api/v1/teams/2/podiums")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.equal(expected);
            expect;
            done();
          });
      });

      it("should return a 422 error if missing body params", done => {
        const body = { name: "Test" };

        chai
          .request(app)
          .patch("/api/v1/teams/Toyota/podiums")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(422);
            expect(response.body).to.equal("unprocessable entity");
            done();
          });
      });

      it("should return 404 if no team is found", done => {
        const body = { podiums: 4 };

        const expected = '"Driver not found"';

        chai
          .request(app)
          .patch("/api/v1/teams/30/podiums")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.error.text).to.equal(expected);
            done();
          });
      });
    });

    describe("api/v1/teams/:team_id/titles", () => {
      it("should update team titles", done => {
        const body = { titles: 3 };
        const expected = "Changed 1 team's titles to 3";

        chai
          .request(app)
          .patch("/api/v1/teams/2/titles")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.equal(expected);
            done();
          });
      });

      it("should return 244 if missing titles", done => {
        const body = { pants: 3 };

        chai
          .request(app)
          .patch("/api/v1/teams/2/titles")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(244);
            expect(response.body).to.equal("Unprocessable entity");
            done();
          });
      });

      it("should return 404 if team does not exist", done => {
        const body = { titles: 4 };

        const expected = '"Team not found"';

        chai
          .request(app)
          .patch("/api/v1/teams/44/titles")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.error.text).to.equal(expected);
            done();
          });
      });
    });

    describe("api/v1/teams - POST", () => {
      it("should post a new team", done => {
        const team = {
          name: "Toyota"
        };
        const expected = "Added team Toyota";

        chai
          .request(app)
          .post("/api/v1/teams")
          .send(team)
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.equal(expected);
            done();
          });
      });

      it("should return 422 if missing params", done => {
        const expected = "Unprocessable Entity - no team name";

        chai
          .request(app)
          .post("/api/v1/teams")
          .send({})
          .end((error, response) => {
            expect(response).to.have.status(422);
            expect(response.body).to.equal(expected);
            done();
          });
      });
    });

    describe("api/v1/team/:team - delete", () => {
      it("should delete a team", done => {
        const expected = "Succesfully deleted 1 team";

        chai
          .request(app)
          .delete("/api/v1/teams/3")
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.equal(expected);
            done();
          });
      });

      it("should return 404 if the team does not exist", done => {
        const expected = '"Team not found"';

        chai
          .request(app)
          .delete("/api/v1/teams/33")
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.error.text).to.equal(expected);
            done();
          });
      });

      it("should return races won by a specific driver", done => {
        let driver;

        chai
          .request(app)
          .get("/api/v1/drivers")
          .then(response => {
            const drivers = response.body;

            const hamilton = response.body.find(driver => {
              return driver.name === "Hamilton";
            });

            return hamilton.id;
          })
          .then(id => {
            chai
              .request(app)
              .get(`/api/v1/races/drivers/${id}`)
              .end((error, response) => {
                expect(response).to.have.status(201);
                expect(response.body.length).to.equal(11);

                done();
              });
          });
      });

      it("should return 204 if no races have been won by the specificed driver", done => {
        const expected = "No Content";
        chai
          .request(app)
          .get("/api/v1/races/drivers/100")
          .end((error, response) => {
            expect(response).to.have.status(204);
            expect(response.res.statusMessage).to.equal(expected);
            done();
          });
      });
    });
  });
});
