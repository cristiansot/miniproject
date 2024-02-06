const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require ('morgan');
require("dotenv").config();
const sequelize = require ('./config/sequelize');

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use(require('./routes/currencyRoute'));
app.use(require('./routes/countryRoute'));

const connect = async () => {

  try{
    await sequelize.authenticate();
    console.log("Database Online")
    
  }catch(error) {
    console.log('Database not connected')
  }
}

connect();

const PORT = process.env.PORT
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('DB is Sync')
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`)
    }) 
  })
  .catch((error) => {
    console.log('Error creating currency table')
  })

