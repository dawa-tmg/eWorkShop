require('dotenv').config()
exports.up = function(knex) {
  return knex.schema.createTable('booking', function(table){
    table.increments('booking_id').primary();
    table.integer('service_id').unsigned().references('service_id').inTable('service').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('mechanic_id').unsigned().references('mechanic_id').inTable('mechanic').onDelete('CASCADE').onUpdate('CASCADE');
    table.timestamp('appointment').notNullable();
    table.enu('status', ['pending', 'approved', 'rejected', 'completed', 'inprogress']).defaultTo('pending').notNullable();
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('booking')
};
