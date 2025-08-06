exports.up = function(knex) {
  return knex.schema.createTable('service', function(table){
    table.increments('service_id').primary();
    table.string('image', 255);
    table.string('name', 240).notNullable();
    table.text('description');
    table.decimal('price',10,2).notNullable();
    table.integer('duration');
    table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('service')
};
