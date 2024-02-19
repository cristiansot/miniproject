const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

/* This code is defining a Sequelize model for a "country" table in a database. */
const countryModel = sequelize.define('country', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = countryModel;
