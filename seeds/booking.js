exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE booking RESTART IDENTITY CASCADE');
  await knex('booking').insert([
    {
      service_id: 1,
      mechanic_id: 1,
      appointment: new Date(),
      status: 'pending',
    },
    {
      service_id: 2,
      mechanic_id: 2,
      appointment: new Date('2025-08-10T10:00:00'),
      status: 'inprogress',
    },
    {
      service_id: 1,
      mechanic_id: 1,
      appointment: new Date('2025-08-15T14:30:00'),
      status: 'completed',
    }
  ]);
};
