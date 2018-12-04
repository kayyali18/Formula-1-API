const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const app = require("../server.js");

describe("Server file", () => {
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
    it("should post a new driver", done => {
      const body = { name: "Kevin", country: "USA" };
      const expected = [{ ...body, team_id: "1" }];
      chai
        .request(app)
        .post("/api/v1/team/1/drivers")
        .send(body)
        .end((error, response) => {
          expect(response).to.have.status(201);
          expect(app.locals.drivers).to.deep.equal(expected);
          app.locals.drivers = [];
          done();
        });
    });

    describe("/api/v1/drivers/:driver_id/team", () => {
      it("should patch team", done => {
        const driver = {
          id: 7,
          name: " kimi",
          team_id: "Ferrari",
          country: "Finland"
        };
        const body = { team_id: "Sauber" };
        const expected = [{ ...driver, team_id: "Sauber" }];
        app.locals.drivers = [driver];
        chai
          .request(app)
          .patch("/api/v1/drivers/7/team")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(app.locals.drivers).to.deep.equal(expected);
            done();
            app.locals.drivers = [];
          });
      });

      it("should return 404 if the driver does not exist", done => {
        const driver = {
          id: 7,
          name: "Kimi",
          team_id: "Ferrari",
          country: "Finland"
        };

        const body = { team_id: "Sauber" };

        app.locals.drivers = [driver];

        chai
          .request(app)
          .patch("/api/v1/drivers/1/team")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(404);
            done();
            app.locals.drivers = [];
          });
      });

      it("should return 422 if the team_id is not a string", done => {
        const driver = {
          id: 7,
          name: "Kimi",
          team_id: "Ferrari",
          country: "Finland"
        };

        const body = { team_id: 1 };

        app.locals.drivers = [driver];

        chai
          .request(app)
          .patch("/api/v1/drivers/hello/team")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(422);
            done();
            app.locals.drivers = [];
          });
      });

      describe("/api/v1/drivers/:driver_id/points", () => {
        it("should update points properly", done => {
          const driver = {
            id: "4",
            name: "Steve",
            team_id: "Mclaren",
            country: "UK",
            points: 80
          };

          const body = { points: 89 };

          const expected = [{ ...driver, points: body.points }];

          app.locals.drivers = [driver];

          chai
            .request(app)
            .patch("/api/v1/drivers/4/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(201);
              expect(app.locals.drivers).to.deep.equal(expected);
              done();
              app.locals.driver = [];
            });
        });

        it("should return 404 if the driver is not found", done => {
          const driver = {
            id: "4",
            name: "Steve",
            team_id: "Mclaren",
            country: "UK",
            points: 80
          };

          const body = { points: 89 };

          app.locals.drivers = [driver];

          chai
            .request(app)
            .patch("/api/v1/drivers/10/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(404);
              done();
              app.locals.driver = [];
            });
        });

        it("should return 422 if the body has no points", done => {
          const driver = {
            id: "4",
            name: "Steve",
            team_id: "Mclaren",
            country: "UK",
            points: 80
          };

          const body = { carrots: 89 };

          app.locals.drivers = [driver];

          chai
            .request(app)
            .patch("/api/v1/drivers/4/points")
            .send(body)
            .end((error, response) => {
              expect(response).to.have.status(422);
              done();
              app.locals.driver = [];
            });
        });
      });

      describe("/api/v1/drivers/:driver_id - delete", () => {
        it("should delete a driver", done => {
          const driver = {
            id: "4",
            name: "Steve",
            team_id: "Mclaren",
            country: "UK",
            points: 80
          };

          app.locals.drivers = [driver];

          chai
            .request(app)
            .delete("/api/v1/drivers/4")
            .end((error, response) => {
              expect(response).to.have.status(201);
              done();
            });
        });

        it("should return 404 if driver not found", done => {
          const driver = {
            id: "4",
            name: "Steve",
            team_id: "Mclaren",
            country: "UK",
            points: 80
          };

          app.locals.drivers = [driver];

          chai
            .request(app)
            .delete("/api/v1/driver/14")
            .end((error, response) => {
              expect(response).to.have.status(404);
              expect(app.locals.drivers).to.deep.equal([driver]);
              done();
            });
        });
      });
    });
  });

  describe("Team endpoints", () => {
    it("should get all teams", done => {
      const newTeam = {
        name: "Toyota",
        podiums: 2,
        titles: 3
      };

      app.locals.teams = [newTeam];

      chai
        .request(app)
        .get("/api/v1/teams")
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.deep.equal([newTeam]);
          done();
          app.locals.teams = [];
        });
    });

    describe("api/v1/teams/:team_id/podiums", () => {
      it("should update team podiums", done => {
        const team = {
          name: "Toyota",
          podiums: 2,
          titles: 3
        };

        const body = { podiums: 3 };

        const expected = [{ ...team, podiums: 3 }];

        app.locals.teams = [team];

        chai
          .request(app)
          .patch("/api/v1/teams/Toyota/podiums")
          .send(body)
          .end((error, response) => {
            expect(response).to.have.status(201);
            expect(app.locals.teams).to.deep.equal(expected);
            done();
            app.locals.teams = [];
          });
      });

      it("should return a 244 error if missing params", body => {});
    });
  });
});
