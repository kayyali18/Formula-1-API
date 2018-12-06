module.exports = {
  test: {
    client: "pg",
    connection: "postgres://localhost/formula_1",
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
  }
};
