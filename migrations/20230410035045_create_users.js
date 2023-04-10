/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments().primary();
    table.string('name');
    table.timestamps();
  })
  .then(console.log('created user table'));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users').then(console.log('deleted user table'));
};
