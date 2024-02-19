const Country = require('./models/country')

Country.sync().then(() => {
    console.log('Country tables created');

    Country.bulkCreate([
        { name: 'Canada'},
        { name: 'USA' }, 
        { name: 'Chile' } 
    ]).then(() => {
        console.log('Countries created');
    }).catch((error) => { 
        console.log(`error creating countries: ${error}`);
    });
}).catch((error) => { 
    console.log('error creating table:', error);
});

    
