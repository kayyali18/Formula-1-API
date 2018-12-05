exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("teams", function(table) {
      table.increments("id").primary();
      table.string("name");
      table.integer("podiums");
      table.integer("titles");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("drivers", function(table) {
      table.increments("id").primary();
      table.string("name");
      table.integer("points");
      table.string("country");
      table.integer("team_id").unsigned();
      table.foreign("team_id").references("teams.id");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("races", function(table) {
      table.increments("id").primary();
      table.string("name");
      table.string("date");
      table.integer("winner_id").unsigned();
      table.foreign("winner_id").references("drivers.id");
      table.integer("winning_team_id").unsigned();
      table.foreign("winning_team_id").references("teams.id");
      table.integer("laps");
      table.string("fastest_lap");
      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("races"),
    knex.schema.dropTable("drivers"),
    knex.schema.dropTable("teams")
  ]);
};
