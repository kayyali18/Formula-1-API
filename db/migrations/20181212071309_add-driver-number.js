
exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.table('drivers', function(table) {
        table.string('driver_number');
      })
    ]);
  };

  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.table('drivers', function(table) {
        table.dropColumn('driver_number');
      })
    ]);
  };
