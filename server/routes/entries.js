const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
  db.getEntries()
  .then(posts => {
      res.send(posts)
  })
  .catch(err => {
      res.status(500).send(err.message)
  })
})

router.post('/new', (req,res) => {
    const entry = {
        ...req.body,
        id: Number(req.body.id),
    }
    db.saveEntry(entry)
    res.sendStatus(204)
})
module.exports = router