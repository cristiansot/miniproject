const sequelize = require('../config/sequelize');
const { DataTypes } = require('sequelize');
// const country = require('./country')

const currency = sequelize.define('currency', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
  },
  currencyCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  countryId: {
    type: DataTypes.INTEGER,
    // references: {
    //   model: country,
    //   key: "id",
    // },
  },
  convertionRate: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

// currency.belongsTo(country, { foreignKey: "country_id" });

module.exports = currency;