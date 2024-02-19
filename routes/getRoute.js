const { Router } = require('express');
const router = Router();
const Currency = require('../models/currency');
const Country = require('../models/country');

/* The code `router.get('/currency-countryName', async (req, res) => { ... })` is defining a route
handler for a GET request to the '/currency-countryName' endpoint. */
router.get('/currency-countryName', async (req, res) => {
  try {
    const currenciesAndCountries = await Currency.findAll({ include: Country });
    res.json(currenciesAndCountries);
  } catch (error) {
    console.error('Error retrieving currency and country data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
