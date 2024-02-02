const { Router } = require('express');
const router = Router();
const currency = require('../models/currency');
const country = require('../models/country')

/* This code is defining a GET route for '/currency/'. When a GET request is made to this route, it
will execute the `currency.findAll()` function, which is likely a function that retrieves all
currency data from a database. The retrieved currency data is then sent as a response using
`res.send(currency)`. If there is an error during the retrieval process, it will be caught and
logged to the console using `console.log(error)`. */
router.get('/currency/', async(req, res) => {
  currency.findAll()
  .then((currency) => {
    res.send(currency);
  })
  .catch((error) => {
    console.log(error);
  });
})

  
// router.post('/currency/', (req, res) => {
// 	currency.create({
// 		id: 4,
// 		currencyCode: "AFN",
//     countryId: 22,
// 		convertionRate: "971",
//   }).catch((error) => {
//     if (error) {
//       console.log(error);
//     }
//   });
//   res.send(Currency);
// });

// 	if (newCurrencie.id != 4) {
// 		response.status(404).json({ error: 'content missing' });
// 	} else {
// 		response.json(newCurrencie);
// 	}
// })
  
// router.put('/api/currency/:id/:newRate', (request, response) => {
// 	const newRate = {
// 		id: 5,
// 		currencyCode: "GNF",
// 		country: "Guinea",
// 		conversionRate: "324",
// 	}
// 	response.json(newRate);
// })
  
// router.delete('/api/currency/del/:id', (request, response) => {
// 	const id = Number(request.params.id);
// 	const currencyDel = currencies.filter(currencyId => currencyId.id != id);
// 	response.json(currencyDel);
// })
  
module.exports = router;