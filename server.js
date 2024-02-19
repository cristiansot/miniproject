const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require ('morgan');

/* Initializations */
app.use(cors())
app.use(express.json())

/* Middelware request */
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`)
  next();
})

/* Middleware */
app.use(morgan('tiny'))

/* Router */
app.use(require('./routes/endpoints'));

/* Middelware response */
app.use((req, res, next) => {
  console.log('Unknown endpoint')
  res.send({ message: 'Unknown endpoint'})
})

//Port connection
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
}) 