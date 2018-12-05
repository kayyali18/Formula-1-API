exports.seed = function(knex, Promise) {
  return knex("races")
    .del()
    .then(() => knex("drivers").del())
    .then(() => knex("teams").del())
    .then(function() {
      return knex("teams").insert([]);
    });
};
