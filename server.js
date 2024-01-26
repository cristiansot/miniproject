const express = require('express')  // We import the express application
const cors = require('cors') // Necessary for localhost
const app = express(); // Creates an express application in app
const morgan = require('morgan');

app.use(cors())
app.use(express.json())

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

/* Morgan Middleware* */
app.use(morgan('tiny'));

app.get('/', (request, response) => {
  response.json('Hello world') // Done
})

app.get('/api/currency/', (request, response) => {
  response.json(currencies)
})

app.get('/api/currency/:id', (request, response) => {
  const id = Number(request.params.id);
  const currencyId = currencies.find(currencyId => currencyId.id === id); 

  if (currencyId) { 
    response.json(currencyId);
  } else if (currencyId !== id){
    response.status(404).json({ error: 'Resource not found' });
  } 
})

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

app.put('/api/currency/:id/:newRate', (request, response) => {
  const newRate = {
    id: 5,
    currencyCode: "GNF",
    country: "Guinea",
    conversionRate: "324",
  }
  response.json(newRate);
})

app.delete('/api/currency/del/:id', (request, response) => {
  const id = Number(request.params.id);
  const currencyDel = currencies.filter(currencyId => currencyId.id != id);
 
  response.json(currencyDel);
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})