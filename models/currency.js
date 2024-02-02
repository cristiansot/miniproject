const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const currency = sequelize.define('currency', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
  },
  currencyCode: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  countryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  convertionRate: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = currency;