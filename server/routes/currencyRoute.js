const currencyRouter = require('express').Router();
const Currency = require('../models/currency');

/* This code is defining a GET route for the '/currency/' endpoint. When a GET request is made to this
endpoint, it will execute the callback function. */
currencyRouter.get('/currency/', async (req, res) => {
  try {
    const currencies = await Currency.findAll();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* This code is defining a GET route for the '/currency/:id' endpoint. When a GET request is made to
this endpoint with a specific currency ID, it will execute the callback function. */
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

/* The code `router.post('/currency/', async (req, res) => { ... })` is defining a POST route for the
'/currency/' endpoint. When a POST request is made to this endpoint, it will execute the callback
function. */
currencyRouter.post('/currency', async (req, res) => {
  try {
    const currency = await Currency.create({
      currencyCode: req.body.currencyCode,
      countryId: req.body.countryId,
      conversionRate: req.body.conversionRate,
    }); 

    res.status(201).json(currency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* The code `router.put('/currency/:id', async (req, res) => { ... })` is defining a PUT route for the
'/currency/:id' endpoint. When a PUT request is made to this endpoint with a specific currency ID,
it will execute the callback function. */
currencyRouter.put('/currency/:id', async (req, res) => {
    const currencyCode = req.params.currencyCode;
    const newConversionRate = req.params.conversionRate;
    try {
      const newRate = await Currency.map((Currency) => {
       if(Currency.currencyCode === currencyCode ) {
        return {
          ...Currency,
          conversionRate: Currency.conversionRate = newConversionRate
        }
      } res.status(200).json(newRate);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* The code `router.delete('/currency/:id', async (req, res) => { ... })` is defining a DELETE route
for the '/currency/:id' endpoint. When a DELETE request is made to this endpoint with a specific
currency ID, it will execute the callback function. */

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
