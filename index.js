require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var morgan = require('morgan')
var logger = morgan('tiny')
const cors = require('cors')
const Person = require('./models/person')


app.use(bodyParser.json())
app.use(logger)
app.use(cors())
app.use(express.static('build'))


app.get('/info', (req, res) => {
  res.send(`Sovelluksessa on tällä hetkellä ${persons.length} ihmisen tiedot, ${new Date()}`)
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons.map(person => person.toJson()))
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person.findById(req.params.id).then(person => {
    res.json(person.toJson())
  })
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter(person => person.id !== id);

  res.status(204).end();
});

app.post('/api/persons', (req, res) => {
  const body = req.body
  if(body.content === undefined) {
    return res.status(400).json({error: 'content missing '})
  }
  const person = new Person ({
    name: body.name,
    number: body.number
  })
  person.save().then(savedPerson => {
    res.json(savedPerson.toJson())
  })
})

const error = (req, res) => {
  res.status(404).sed({error: 'unknown endpoint'})
}

app.use(error)


const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
