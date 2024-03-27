const testCurrencyRouter = require('express').Router();
const testCurrency = require('../models/testCurrency');

testCurrencyRouter.get('/testCurrency/', async (req, res) => {
  try {
    const currencies = await testCurrency.findAll();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

testCurrencyRouter.get('/testCurrency/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const testCurrency = await testCurrency.findOne({
      where: { id: id },
    });
    if (testCurrency) {
      res.json(testCurrency);
    } else {
      res.status(404).json({ error: "testCurrency not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

testCurrencyRouter.post('/testCurrency/', async (req, res) => {
  try {
    const testCurrency = await testCurrency.create({
      testCurrencyCode: req.body.testCurrencyCode,
      countryId: req.body.countryId,
      conversionRate: req.body.conversionRate,
    });
    res.status(201).json(testCurrency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

testCurrencyRouter.put('/testCurrency/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const testCurrency = await testCurrency.findByPk(id);
    if (testCurrency) {
      await testCurrency.update(req.body);
      res.json(testCurrency);
    } else {
      res.status(404).json({ error: "testCurrency not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


testCurrencyRouter.delete('/testCurrency/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    const testCurrency = await testCurrency.findByPk(id);
    if (testCurrency) {
      await testCurrency.destroy();
      res.status(204).json({ message: "testCurrency deleted successfully" });
    } else {
      res.status(404).json({ error: "testCurrency not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = testCurrencyRouter;