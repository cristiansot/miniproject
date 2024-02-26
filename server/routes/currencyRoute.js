const currencyRouter = require('express').Router();
const Currency = require('../models/currency');

/**
 * @receives a request to the URL: http://localhost:3001/currency
 * @returns currency list as a JSON
 */
currencyRouter.get('/currency/', async (req, res) => {
  try {
    const currencies = await Currency.findAll();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @receives a GET:id request to the URL: http://localhost:3001/currency/:id
 * @returns a specific currency (entry)
 */
currencyRouter.get('/currency/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const currency = await Currency.findOne({
      where: { id: id },
    });
    if (currency) {
      res.json(currency);
    } else {
      res.status(404).json({ error: "Currency not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @receives a POST request to the URL: http://localhost:3001/currency
 * @returns the newly created currency 
 */
currencyRouter.post('/currency', async (req, res) => {
  console.log('entry data', req.body)
  try {
    const currency = await Currency.create((req.body)
  );
    res.status(201).json(currency);
  } catch (error) {
    console.log('Error from Frontend')
    res.status(500).json({ error: error.message });
  }
});

/**
 * @receives a PUT request to the URL: http://localhost:3001/currency/:id/
 * @returns an appropriate status code
 */
currencyRouter.put('/currency/', async (req, res) => {
  const currencyCode = req.params.currencyCode; 
  const newRate = req.body.conversionRate;

  try {
    const currency = await Currency.findOne({ currencyCode });

    if (currency) {
      currency.conversionRate = newRate;
      await currency.save();
      res.status(200).json(currency); 
    } else {
      res.status(404).json({ error: "Currency not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @receives a DELETE request to the URL: http://localhost:3001/currency/:id
 * @returns an appropriate status code
 */
currencyRouter.delete('/currency/', async (req, res) => {
  const currencyCode = req.params.currencyCode;
  try {
    const currency = await Currency.filter(Currency => Currency.currencyCode === currencyCode);
    if (currency) {
      currency.destroy();
      res.status(204).json({ message: "Currency deleted successfully" });
    } else {
      res.status(404).json({ error: "Currency not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// currencyRouter.delete('/currency/:id', async (req, res) => {
//   const id = Number(req.params.id);
//   try {
//     const currency = await Currency.findByPk(id);
//     if (currency) {
//       await currency.destroy();
//       res.status(204).json({ message: "Currency deleted successfully" });
//     } else {
//       res.status(404).json({ error: "Currency not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = currencyRouter;
