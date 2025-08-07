require('dotenv').config()
exports.up = function(knex) {
  return knex.schema.createTable('avail_service', function(table){
    table.increments('avail_service_id').primary();
    table.integer('service_id').unsigned().references('service_id').inTable('service').onDelete('CASCADE').onUpdate('CASCADE');
    table.string('name', 150).notNullable();
    table.string('phone', 14).notNullable();
    table.string('vehicle', 150).notNullable();
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('avail_service')
};
