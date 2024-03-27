const sequelize = require('../config/sequelize');
const { DataTypes, Model } = require('sequelize');

class testCurrency extends Model {}
Currency.init({
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
  },
  currencyCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  conversionRate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  underscored: false,
  timestamps: false,
  modelName: 'testCurrency'
})

module.exports = testCurrency;