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
});
