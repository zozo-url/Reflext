
exports.up = function(knex, Promise) {
return knex.schema.createTable('journalEntry', (table) => {
    table.increments('id').primary()
    table.string('date')
    table.string('mood')
    table.string('external')
    table.string('journal')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('journalEntry')
};
