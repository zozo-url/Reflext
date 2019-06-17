const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getEntries()
  .then(posts => {
      res.send(posts)
  })
  .catch(err => {
      res.status(500).send(err.message)
  })
})

router.post('/', (req,res) => {
    console.log(req.body)
    db.saveEntry(req.body)
    .then(res.sendStatus(200))
     db.saveEntry(req.body)
    .then (res.sendStatus(204))
})

router.get('/:id', (req,res) => {
    db.deleteEntry(req.params.id)
    .then(entry => {
        res.json(entry)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})
module.exports = router