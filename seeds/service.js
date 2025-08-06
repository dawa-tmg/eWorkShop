exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE service RESTART IDENTITY CASCADE');
  await knex('service').insert([
    {
      image: '/carcash.jpg',
      name: 'Collision Repai Service',
      description: 'We offer full-body collision repair with certified technicians.',
      price: 29.99,
      duration: 30
    },
    {
      image: '/engine.jpg',
      name: 'Engine Service',
      description: 'Keep your engine running smoothly with regular diagnostics and tune-ups.',
      price: 59.99,
      duration: 60
    },
    {
      image: '/TireRotation.jpg',
      name: 'Tire Rotation',
      description: 'Extend the life of your tires with proper rotation and alignment.',
      price: 19.99,
      duration: 15
    }
  ]);
};
