const { Sequelize } = require('sequelize');
const pg = require('pg')

const databaseURL = 'postgres://cristian:v3l2K7MsRa53X1Ejg0B6SAKzzil6Jra9@dpg-cmru4pda73kc739h061g-a.oregon-postgres.render.com/miniproject_db'

const sequelize = new Sequelize(databaseURL, {
  dialectModule: pg,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejecUnauthorized: false
    }
  }
})
    
const connection = async () => {
  try {
    await sequelize.authenticate()
    console.log('DB connected successfully')
  } catch(error) {
    console.log('Unable to connect to DB')
  }
}

connection()

module.exports = { sequelize, connection }