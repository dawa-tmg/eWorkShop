require('dotenv').config()
exports.up = function(knex) {
  return knex.schema.createTable('service_review', function(table){
    table.increments('review_id').primary();
    table.integer('service_id').unsigned().references('service_id').inTable('service').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('mechanic_id').unsigned().references('mechanic_id').inTable('mechanic').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('rating').notNullable();
    table.text('description').notNullable();
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('service_review')
};
