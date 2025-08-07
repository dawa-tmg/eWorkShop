require('dotenv').config()
exports.up = function(knex) {
  return knex.schema.createTable('booking', function(table){
    table.increments('booking_id').primary();
    table.integer('service_id').unsigned().references('service_id').inTable('service').onDelete('CASCADE').onUpdate('CASCADE');
    table.string('name', 150).notNullable();
    table.string('phone', 12).notNullable();
    table.string('vehicle', 20).notNullable();
    table.integer('mechanic_id').unsigned().references('mechanic_id').inTable('mechanic').onDelete('CASCADE').onUpdate('CASCADE');
    table.timestamp('appointment_date').notNullable();
    table.enu('status', ['pending', 'approved', 'rejected', 'completed', 'inprogress']).defaultTo('pending').notNullable();
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('booking')
};
