const sequelize = require('../config/sequelize');
const { DataTypes, Model } = require('sequelize');

class country extends Model {}
country.init({
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  underscored: false,
  timestamps: true,
  modelName: 'Country'
})

module.exports = country;
