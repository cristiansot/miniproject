const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');

const country = sequelize.define('country', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = country;
