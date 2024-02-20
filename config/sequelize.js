const { Sequelize } = require('sequelize');
const pg = require('pg')

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
console.log(__dirname);

const databaseURL = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`

console.log(databaseURL)
const sequelize = new Sequelize(databaseURL, {
  port: 5432,
  dialectModule: pg,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database is synced');
  } catch (error) {
    console.error('Error syncing database:', error.message);
  }
};

syncDatabase();

module.exports = sequelize;