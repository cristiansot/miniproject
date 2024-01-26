const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require ('morgan');

app.use(cors())
app.use(express.json())

/* Middleware */
app.use(morgan('tiny'))

/* Router */
app.use(require('./routes/endpoints'));

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
}) 