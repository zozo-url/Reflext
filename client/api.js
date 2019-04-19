import request from 'superagent'

const entryUrl = 'http://localhost:3000/v1/entries'

export function getJournalEntries (callback) {
    request.get(entryUrl)
      .end((err, res) => {
        callback(err, res.body)
      })
  }