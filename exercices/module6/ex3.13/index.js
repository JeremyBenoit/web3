require('dotenv').config()
const express = require("express")
const morgan = require('morgan')
const Person = require('./models/person')
const cors = require('cors')

const app = express()
app.use(express.json())

morgan.token('body', (request) => {
  return JSON.stringify(request.body)
})
morgan.token('currentUserEmail', (request) => {
  return request.currentUser && request.currentUser.email || "anonymous"
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
app.use(logger)

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL")
  if (email) request.currentUser = { email }
  next()
}
app.use(attachCurrentuser,cors())


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.
app.get("/info", async (request, response) => {
  const now = new Date()
  const length = await Person.find().count()
  const bodyContentText = `
  Phonebook has info for ${length} people.
  ${now.toString()}
  `
  response
      .type("text")
      .send(bodyContentText)
})

app.get("/api/persons", async (request, response) => {
  response.json(await Person.find())
})

app.get("/api/persons/:id", async (request, response) => {
  const idParam = request.params.id
  const person = await Person.find({ id:idParam})

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete("/api/persons/:id", async (request, response) => {
  const idParam = request.params.id
  const id = Number(idParam)
  await Person.deleteOne({ id:id })
  response.status(204)
})

app.post("/api/persons", async (request, response) => {
  const personPayload = request.body
  const newId = Math.floor(Math.random() * 1e9)
  const newPerson = {
    ...personPayload,
    id: newId,
  }

  const errorMessages = []
  if (!personPayload.name) errorMessages.push("name must be present")
  if (!personPayload.number) errorMessages.push("number must be present")
  const nameExists = await Person.find({name: newPerson.name}).count()
  if (nameExists) errorMessages.push("name must be unique")

  if (errorMessages.length > 0) {
    response
        .status(422)
        .json({
          errorMessages,
        })
    return
  }

  // push not concat here. We want to mutate the array.
  const person = new Person(newPerson)
  await person.save()
  response.json(newPerson)
})
