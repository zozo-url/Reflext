import request from 'superagent'

const entryUrl = 'http://reflext.herokuapp.com/v1/entries'
// const entryUrl = 'http://localhost:3000/v1/entries' 

export function getJournalEntries (callback) {
    request.get(entryUrl)
      .end((err, res) => {
        callback(err, res.body)
      })
  }

export function postEntry (entry, callback) {
    request.post(entryUrl)
    .send(entry)
    .end((err, res) => {
        console.log(err);
        console.log(res);
    })
  }
export function deleteEntryById (id, callback) {
  request.get(entryUrl + '/' + id)
    .send(id)
    .end((err, res) => {
      callback(err, res.body)
    })
}