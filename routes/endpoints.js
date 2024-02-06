const { Router } = require('express');
const router = Router();

let currencies = [
	{
		id: 1,
		currencyCode: "CDN",
		country: "Canada",
		conversionRate: 1
	},
	{
		id: 2,
		currencyCode: "USD",
		country: "United States of America",
		conversionRate: 0.75
	},
	{
		id: 3,
		currencyCode: "CLP",
		country: "Chile",
		conversionRate: 152
	}
]

router.get('/', (request, response) => {
	response.json('Hello world') 
})
  
router.get('/api/currency/', (request, response) => {
	response.json(currencies)
})
  
router.get('/api/currency/:id', (request, response) => {
	const id = Number(request.params.id);
	const currencyId = currencies.find(currencyId => currencyId.id === id); 

	if (currencyId) { 
		response.json(currencyId);
	} else if (currencyId !== id){
		response.status(404).json({ error: 'Resource not found' });
	} 
})
  
router.post('/api/currency/', (request, response) => {
	const newCurrencie = {
		// id: 4,
		// currencyCode: "AFN",
		// country: "Afghanistan",
		// conversionRate: "971",
	}
	

	if (newCurrencie.id != 4) {
		response.status(404).json({ error: 'content missing' });
	} else {
		response.json(newCurrencie);
	}
})
  
router.put('/api/currency/:id/:newRate', (request, response) => {
	const newRate = {
		id: 5,
		currencyCode: "GNF",
		country: "Guinea",
		conversionRate: "324",
	}
	response.json(newRate);
})
  
router.delete('/api/currency/del/:id', (request, response) => {
	const id = Number(request.params.id);
	const currencyDel = currencies.filter(currencyId => currencyId.id != id);
	response.json(currencyDel);
})
  
module.exports = router;