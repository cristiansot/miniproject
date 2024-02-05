const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');
const country = require('../models/country');

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
    allowNull: false
  },
  convertionRate: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

currency.hasMany(country, {
  foreignKey: 'currencyId',
  sourceKey: 'id'
})

country.belongsTo(currency, {
  foreignKey: 'currencyId',
  targetId: 'id'
})

module.exports = currency;