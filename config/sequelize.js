const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_HOST, 
    process.env.DB_USE, 
    process.env.DB_PASSWORD, 
    {
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			dialect: 'postgres',
  	});
	
  modele.export = sequelize;