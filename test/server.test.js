process.env.NODE_ENV = "test";
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../server.js");
const configuration = require("../knexfile")["test"];
const database = require("knex")(configuration);

describe("Server file", () => {
  beforeEach(done => {
    database.migrate
      .rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run())
      .then(() => done());
  });

  describe("/api/v1/drivers", () => {
    it("should return a 200 status code", done => [
      chai
        .request(app)
        .get("/api/v1/drivers")
        .end((error, response) => {
          expect(response).to.have.status(200);
          done();
        })
    ]);
  });

  describe("driver endpoints", () => {
    beforeEach(done => {
      database.migrate
        .rollback()
        .then(() => database.migrate.latest())
        .then(() => database.seed.run())
        .then(() => done());
    });

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

    describe("/api/v1/drivers/:driver_id/team", () => {
      it("should patch team", done => {
        const body = { team_id: 2 };
        const expected = 1;
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

        chai
          .request(app)
          .patch("/api/v1/drivers/30/team")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404);
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

          const expected = "1";

          chai
            .request(app)
            .patch("/api/v1/drivers/4/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(201);
              expect(response.text).to.equal(expected);
              done();
            });
        });

        it("should return 404 if the driver is not found", done => {
          const body = { points: 89 };

          chai
            .request(app)
            .patch("/api/v1/drivers/21/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(404);
              done();
            });
        });

        it("should return 422 if the body has no points", done => {
          const body = { carrots: 89 };

          chai
            .request(app)
            .patch("/api/v1/drivers/4/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(422);
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

          chai
            .request(app)
            .post("/api/v1/team/5/drivers")
            .send(driver)
            .end((error, response) => {
              expect(response).to.have.status(201);
              expect(response.body).to.equal(21);
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
          const expected = 1;

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
          chai
            .request(app)
            .delete("/api/v1/driver/30")
            .end((error, response) => {
              expect(response).to.have.status(404);

              done();
            });
        });
      });
    });
  });

  describe("Race endpoints", () => {
    it("should get all grand prix", done => {
      chai
        .request(app)
        .get("/api/v1/races")
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.length).to.equal(19);
          done();
        });
    });

    it("should return the races that match the continent", done => {
      chai
        .request(app)
        .get("/api/v1/races?continent=Europe")
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.length).to.equal(10);
          console.log(response.body);
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
  });

  describe("Team endpoints", () => {
    it("should get all teams", done => {
      chai
        .request(app)
        .get("/api/v1/teams")
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body.length).to.equal(10); //THIS SHOULD EVALUATE THE RESPONSE OBJECT
          done();
        });
    });

    describe("api/v1/teams/:team_id/podiums", () => {
      it("should update team podiums", done => {
        const body = { podiums: 3 };

        const expected = 1;

        chai
          .request(app)
          .patch("/api/v1/teams/2/podiums")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(response.body).to.equal(1);
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

        chai
          .request(app)
          .patch("/api/v1/teams/30/podiums")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404);
            done();
          });
      });
    });

    describe("api/v1/teams/:team_id/titles", () => {
      it("should update team titles", done => {
        const body = { titles: 3 };
        const expected = 1;

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

        chai
          .request(app)
          .patch("/api/v1/teams/44/titles")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404);

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
        const expected = 0;

        chai
          .request(app)
          .delete("/api/v1/teams/33")
          .end((error, response) => {
            expect(response).to.have.status(404);
            expect(response.body).to.equal(expected);
            done();
          });
      });
    });
  });
});
