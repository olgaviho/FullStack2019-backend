const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//var morgan = require('morgan')
//var logger = morgan('tiny')
const cors = require('cors')


app.use(bodyParser.json())
//app.use(logger)
app.use(cors())

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '045-123657',
  },
  {
    id: 2,
    name: 'Arto Järvinen',
    number: '400-890769',
  },
  {
    id: 3,
    name: 'Lea Kutvonen',
    number: '400-8950769',
  },
]

app.get('/info', (req, res) => {
    res.send(`Sovelluksessa on tällä hetkellä ${persons.length} ihmisen tiedot, ${new Date()}`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id);

    res.status(204).end();
});

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (body.name === undefined) {
        return res.status(400).json({
            error: 'name missing'
        })
    }

    if (body.number === undefined) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    persons.forEach(function (p) {
        if (body.name === p.name) {
            return res.status(400).json({
            error: 'this name already exists'
        })
      }
    })

    const person = {

        name: body.name,
        number: body.number,
        id: Math.floor(Math.random()*10000)
    }

    persons = persons.concat(person)
    res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
