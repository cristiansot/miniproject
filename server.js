const express = require('express')  // We import the express application
const cors = require('cors') // Necessary for localhost
const app = express(); // Creates an express application in app
// import { currencies } from './currencies.js';

/**
 * Initial application setup
 * We need to use cors so we can connect to a localhost later
 * We need express.json so we can receive requests with JSON data attached
 */
app.use(cors())
app.use(express.json())

/**
 * DATA STORAGE
 * We're using a local variable 'currencies' to store our data: a list of currency objects
 * Each object represents a 'currency', and contains the following fields
 * id: a number, 
 * currencyCode: a string, three letters (see https://www.iban.com/currency-codes as reference)
 * country: a string, the name of the country
 * conversionRate: the amount, in that currency, required to equal 1 Canadian dollar
 */

let currencies = [
  {
    id: 1,
    currencyCode: "CDN",
    country: "Canada",
    conversionRate: 1
  },
  {
    id: 2,
    currencyCode: "USD",
    country: "United States of America",
    conversionRate: 0.75
  },
  {
    id: 3,
    currencyCode: "CLP",
    country: "Chile",
    conversionRate: 152
  }
]

/**
 * TESTING Endpoint (Completed)
 * @receives a get request to the URL: http://localhost:3001/
 * @responds with the string 'Hello World!'
 */
app.get('/', (request, response) => {
  response.json('Hello world') // Done
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
app.get('/api/currency/:id', (request, response) => {
  const id = Number(request.params.id);
  const currencyId = currencies.find(currencyId => currencyId.id === id); 
  if (!id) {
    response.status(404).json({ error: 'resource not found' });
  } else {
    response.json(currencyId);
  }
})

/**
 * TODO: POST Endpoint
 * @receives a post request to the URL: http://localhost:3001/api/currency,
 * with data object enclosed
 * @responds by returning the newly created resource
 */
app.post('/api/currency/', (request, response) => {
  const newCurrencie = {
    id: 4,
    currencyCode: "AFN",
    country: "Afghanistan",
    conversionRate: "971",
  }
  if (newCurrencie.id != 4) {
    response.status(404).json({ error: 'content missing' });
  } else {
    response.json(newCurrencie);
  }
})

/**
 * TODO: PUT:id endpoint
 * @receives a put request to the URL: http://localhost:3001/api/currency/:id/:newRate
 * with data object enclosed
 * Hint: updates the currency with the new conversion rate
 * @responds by returning the newly updated resource
 */
app.put('/api/currency/', (request, response) => {
  response.send('Put information')
})

/**
 * TODO: DELETE:id Endpoint
 * @receives a delete request to the URL: http://localhost:3001/api/currency/:id,
 * @responds by returning a status code of 204
 */
app.delete('/api/currency/del/:id', (request, response) => {
  const id = Number(request.params.id);
  const currencyDel = currencies.filter(currencyId => currencyId.id != id);
 
  response.json(currencyDel);
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})