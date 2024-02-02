const Currency = require('./models/currency')

Currency.sync().then(() => {
    console.log('New currency created')

    Currency.bulkCreate([
      {
        currencyCode: "CLP",
        countryId: 1,
        convertionRate: 152,
      }
    ]).then(() => console.log('Currency created'))
      .catch((error) => console.log(`Error creating currency: ${error}`))
}).catch((error) => {
  console.log(`Error creating table: `, error)
})
