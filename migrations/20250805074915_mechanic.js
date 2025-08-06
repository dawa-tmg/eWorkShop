require('dotenv').config()
exports.up = function(knex) {
  return knex.schema.createTable('mechanic', function(table){
    table.increments('mechanic_id').primary();
    table.string('name', 150).notNullable();
    table.string('email', 150).unique();
    table.string('phone', 14).notNullable();
    table.string('specialization', 150).notNullable();
    table.text('description').notNullable();
    table.boolean('availability').notNullable();
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('mechanic')
};
