exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE mechanic RESTART IDENTITY CASCADE');
  await knex('mechanic').insert([
    {
      name: 'John',
      email: 'john@gmail.com',
      phone: '1234567891',
      specialization: 'Automotive Mechanic',
      description: 'Works on standard cars and light trucks. Repairs engines, brakes, suspension, exhaust, etc.',
      availability: true,
    },
    {
      name: 'Doe',
      email: 'doe@gmail.com',
      phone: '1234567892',
      specialization: 'Motorcycle Mechanic',
      description: 'Repairs and maintains motorcycles, scooters, and ATVs. Often requires knowledge of small engine systems.',
      availability: false,
    },
    {
      name: 'Mike',
      email: 'mike@gmail.com',
      phone: '1234567893',
      specialization: 'Diesel Mechanic',
      description: 'Specializes in diesel engines (buses, trucks, generators). Works on large vehicles or machinery with diesel power.',
      availability: true,
    }
  ]);
};
