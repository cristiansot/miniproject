const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require ('morgan');
require("dotenv").config();
const pg = require('pg')

const sequelize = require ('./config/sequelize')

app.use(cors())
app.use(express.json())

const connect = async () => {

  try{
    await sequelize.authenticate();
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

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
}) 