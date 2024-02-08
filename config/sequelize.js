const { Sequelize } = require('sequelize');

/* The code is creating a new instance of the Sequelize class and assigning it to the constant variable
`sequelize`. */
const sequelize = new Sequelize(

    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
        }
      }
  	});
	
  module.exports = sequelize;