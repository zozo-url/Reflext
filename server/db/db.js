
const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getEntries,
    addEntry
}

function getEntries (db = connection) {
    return db('journalEntry').select()
}

function addEntry (db = connection) {
    return db('journalEntry').insert()
}