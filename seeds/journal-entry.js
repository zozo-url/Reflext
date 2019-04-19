
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('journalEntry').del()
    .then(function () {
      // Inserts seed entries
      return knex('journalEntry').insert([
        {id: 1,
          mood: 'happy',
          external: 'good sleep',
          journal: 'this is a test entry'}
      ]);
    });
};
