const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');
const country = require('../models/country');

/* The code is defining a Sequelize model for a "currency" table in a database. */
const currency = sequelize.define('currency', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
  },
  currencyCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: country,
      key: "id"
    }
  },
  convertionRate: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

/* `currency.belongsTo(country, { foreignKey: 'countryId' })` is establishing a foreign key
relationship between the `currency` model and the `country` model. */
currency.belongsTo(country, {
  foreignKey: 'countryId'
})

module.exports = currency;