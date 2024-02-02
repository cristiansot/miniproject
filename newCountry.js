const Country = require('./models/country')

/* The code is creating a new country in a database table called "Country". */
Country.sync().then(() => {
    console.log('New country created')

    Country.bulkCreate([
      {
        name: "Chile"
      }
    ]).then(() => console.log('Country created'))
      .catch((error) => console.log(`Error creating country: ${error}`))
}).catch((error) => {
  console.log(`Error creating table: `, error)
})
