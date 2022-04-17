const UserView = require('./app/views/UserView')
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

// HTTP METHODS
app.get('/v1/explorers', (req, res) => {
  console.log(`Api Explorers GET ALL requests ${new Date()}`)
  const explorers = UserView.getAllUsers()
  res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
  console.log(`GET Getting explorer with id ${req.params.id}`)
  const explorer = UserView.getUserById(req.params.id)
  res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
  console.log(`POST Api Explorers POST request ${new Date()}`)
  const explorer = UserView.createUser(req.body)
  res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id', (req, res) => {
  console.log(`PUT Api Explorers PUT request ${new Date()}`)
  const requestBody = req.body // Parámetros de un cliente
  res.status(200).json({message: "Updated!"})
})

app.delete('/v1/explorers/:id', (req, res) => {
  console.log(`DELETE Api Explorers DELETE request ${new Date()}`)
  console.log(`Delete explorer with id ${req.params.id}`)
  const deleteUser = UserView.deleteUser(req.params.id)
  res.status(200).json({message: "Deleted"})
})

// Inicializar server de express
app.listen(port, () => {
 console.log(`Twitter App ready on localhost:${port}`)
})

