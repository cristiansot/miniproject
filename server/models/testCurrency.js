const sequelize = require('../config/sequelize');
const { DataTypes, Model } = require('sequelize');
const Country = require('../models/country')

class Currency extends Model {}
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
  countryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Country,
      key: 'id',
    }
  },
  conversionRate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  underscored: false,
  timestamps: false,
  modelName: 'Currency'
})

Currency.belongsTo(Country, {
  foreignKey: 'countryId',
  onDelete: 'CASCADE',
  hooks: true,
})

module.exports = Currency;