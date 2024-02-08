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

router.get('/', (req, res) => {
	res.json('Hello world') 
})
  
router.get('/api/currency/', (req, res) => {
	res.json(currencies)
  console.log('Showing currencies')
})
  
router.get('/api/currency/:id', (req, res) => {
	const id = Number(req.params.id);
	const currencyId = currencies.find(currency => currency.id === id); 
	if (currencyId) { 
		res.json(currencyId);
	} else if (currencyId !== id){
		res.status(404).json({ error: 'Resource not found' });
	} 
})

router.post('/api/currency/', (req, res) => {
  const newCurrency = req.body;
  const isDuplicateId = currencies.some(currency => currency.id === newCurrency.id);
  if (isDuplicateId) {
      res.status(400).json({ message: "This ID exist"});
  } else {
    newCurrency.id = currencies.length + 1;
    currencies.push(newCurrency);
    res.status(201).json(newCurrency);
    console.log('Moneda creada exitosamente.');
  }
});

router.put('/api/currency/:id', (req, res) => {
  const id = Number(req.params.id);
  const newRate = currencies.find(currency => currency.id === id);
  if (newRate) {
    newRate.currencyCode = req.body.currencyCode;
    newRate.country = req.body.country;
    newRate.conversionRate = req.body.conversionRate;
    res.status(201).json(newRate);
  } else {
    res.sendStatus(500).json({ message: error.message});
  }
});

router.delete('/api/currency/:id', (req, res) => {
	const id = Number(req.params.id);
	const initialLength = currencies.length;
	currencies = currencies.filter(currency => currency.id !== id);
	if (currencies.length < initialLength) {
	  console.log('Currency deleted');
	  res.status(201).send({ message: 'Currency deleted' });
	} else {
	  console.log('Currency not found');
	  res.status(404).send({ message: 'Currency not found' });
	}
});
  
module.exports = router;