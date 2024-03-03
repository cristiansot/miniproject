const Country = require('./models/country')
const Currency = require('./models/currency')

Country.sync().then(() => {
    console.log('Country tables created');

    Country.bulkCreate([
        { name: 'Canada', countryId: 1},
        { name: 'United States', countryId: 2 },
        { name: 'Chile', countryId: 3 }
    ]).then(() => {
        console.log('Countries created');
    }).catch((error) => { 
        console.log(`error creating countries: ${error}`);
    });
}).catch((error) => { 
    console.log('error creating contries table:', error);
});


Currency.sync().then(() => {
    console.log('Country tables created');

    Currency.bulkCreate([
        { currencyCode: 'CDN', countryId: 1, conversionRate: 90 },
        { currencyCode: 'USD', countryId: 2, conversionRate: 0.75 },
        { currencyCode: 'CLP', countryId: 3, conversionRate: 140 }
    ]).then(() => {
        console.log('Currencies created');
    }).catch((error) => { 
        console.log(`error creating currencies: ${error}`);
    });
}).catch((error) => { 
    console.log('error creating currencies table:', error);
});


