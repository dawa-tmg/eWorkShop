exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE service_review RESTART IDENTITY CASCADE');
  await knex('service_review').insert([
    {
      service_id: 1,
      mechanic_id: 1, 
      rating: 5, 
      description: 'Excellent'
    },
    {
      service_id: 2, 
      mechanic_id: 2, 
      rating: 4, 
      description: 'Very Good'
    },
    {
      service_id: 3,
      mechanic_id: 3,
      rating: 3, 
      description: 'Good'
    },
  ]);
};
