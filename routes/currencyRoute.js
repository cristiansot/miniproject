const { Router } = require('express');
const router = Router();
const currency = require('../models/currency')


router.get('/', async(req, res) => {
  currency.findAll()
  .then((currency) => {
    res.send(currency);
  })
  .catch((error) => {
    console.log(error);
  });
})
  

// router.get('/api/currency/:id', (request, response) => {
// 	const id = Number(request.params.id);
// 	const currencyId = currencies.find(currencyId => currencyId.id === id); 

// 	if (currencyId) { 
// 		response.json(currencyId);
// 	} else if (currencyId !== id){
// 		response.status(404).json({ error: 'Resource not found' });
// 	} 
// })
  
// currencyRouter.post('/', (request, response) => {
// 	Currency.create({
// 		id: 4,
// 		currencyCode: "AFN",
// 		convertionRate: "971",
//   }).catch((error) => {
//     if (error) {
//       console.log(error);
//     }
//   });
//   response.json(Currency);
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