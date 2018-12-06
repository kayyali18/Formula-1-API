exports.up = function(knex, Promise) {
  return knex.schema.table("races", table => {
    table.string("continent");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("races", table => {
    table.dropColumn("continent");
  });
};
