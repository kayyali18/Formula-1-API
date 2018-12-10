const DB_URL =
  "postgres://bmvcctmtaagqql:7c3d48c94540219001bfb36f61ad151461e83aebd0f974a6e181a5b1d6272f40@ec2-54-197-234-33.compute-1.amazonaws.com:5432/d41hc10gn05mog";

module.exports = {
  test: {
    client: "pg",
    connection: "postgres://localhost/formula_1_test",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/test"
    },
    useNullAsDefault: true
  },

  development: {
    client: "pg",
    connection: "postgres://localhost/formula_1",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    debug: true,
    connection: DB_URL,
    migrations: {
      directory: "./db/migrations"
    },
    ssl: true,
    useNullAsDefault: true
  }
};
