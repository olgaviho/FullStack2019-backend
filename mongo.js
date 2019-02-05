const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}
const password = process.argv[2]

const url =
  `mongodb://fullstack:${password}@ds247101.mlab.com:47101/fullstackoona`

mongoose.connect(url, { useNewUrlParser: true })


const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  }
})


const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 4) {
  Person.find({}).then(result => {
    console.log('puhelinluettelo:')
    result.forEach(person => {
      console.log(person.name, person.number)

    })
    mongoose.connection.close()
  })

} else {

  const newname = process.argv[3]
  const newnumber = process.argv[4]

  const person = new Person({
    name: newname,
    number: newnumber,
  })

  person.save().then(response => {
    console.log(`lisätään ${newname} numero ${newnumber} luetteloon`);
    mongoose.connection.close();
  })

}

