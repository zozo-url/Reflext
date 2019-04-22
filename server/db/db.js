
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getEntries,
    saveEntry
}

function getEntries (db = connection) {
    return db('journalEntry').select()
}

function saveEntry (entry, db = connection) {
    return db('journalEntry')
    .insert({
        date: entry.date,
        mood: entry.mood,
        external: entry.external,
        journal: entry.reflection
    })
}