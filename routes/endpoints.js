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
  try {
    const newCurrencies =  req.body;
    newCurrencies.id = currencies.length + 1,
    currencies.push(newCurrencies);
    res.status(201).json(newCurrencies);
    console.log('Currency created');
  } catch (error){
    res.status(500).json({ message: error.message});
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