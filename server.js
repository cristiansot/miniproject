const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require ('morgan');
const { Sequelize } = require('sequelize');
require("dotenv").config();

app.use(cors())
app.use(express.json())

const connect = async () => {

  try{
    await Sequelize.authenticate();
    console.log("DB online")
    
  }catch(error) {
    console.log('No connected')
  }
}

connect();

/* Middleware */
app.use(morgan('tiny'))

/* Router */
app.use(require('./routes/endpoints'));

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
}) 