import {currencies} from './currencies.js' // DB

const express = require('express')  // We import the express application
const cors = require('cors') // Necessary for localhost
const app = express() // Creates an express application in app


/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 * MIDDLEWARES */ 
app.use(cors())
app.use(express.json())


/* ENDPOINTS */
/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
app.get('/', (request, response) => {
  response.json(currencies)
})

/**
 * TODO: GET Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/
 * @responds with returning the data as a JSON
 */
app.get('/api/currency/', (request, response) => {
  response.json(currencies)
})

/**
 * TODO: GET:id Endpoint
 * @receives a get request to the URL: http://localhost:3001/api/currency/:id
 * @responds with returning specific data as a JSON
 */
app.get('...', (request, response) => {
})

/**
 * TODO: POST Endpoint
 * @receives a post request to the URL: http://localhost:3001/api/currency,
 * with data object enclosed
 * @responds by returning the newly created resource
 */
app.post('...', (request, response) => {
  console.log("Recived POST req")
})

/**
 * TODO: PUT:id endpoint
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */
app.put('...', (request, response) => {
})

/**
 * TODO: DELETE:id Endpoint
 * @receives a delete request to the URL: http://localhost:3001/api/currency/:id,
 * @responds by returning a status code of 204
 */
app.post('...', (request, response) => {
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})