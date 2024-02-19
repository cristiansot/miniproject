const sequelize = require('../config/sequelize');
const { DataTypes, Model } = require('sequelize');

class currency extends Model {}
currency.init({
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
  conversionRate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, {
  sequelize,
  underscored: false,
  timestamps: true,
  modelName: 'Currency'
})

currency.belongsTo(country, {
  foreignKey: 'countryId'
})

module.exports = currency;