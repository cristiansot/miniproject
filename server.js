const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require ('morgan');
require("dotenv").config();
const sequelize = require ('./config/sequelize');
const currency = require('./models/currency');
const country = require('./models/country');

app.use(cors())
app.use(express.json())

const connect = async () => {

  try{
    await sequelize.authenticate();
    console.log("DB Online")
    
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
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('DB is Sync')
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`)
    }) 
  })
  .catch((error) => {
    console.log('Error creating currency table')
  })

