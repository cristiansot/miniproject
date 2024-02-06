const { Router } = require('express');
const router = Router();
const Currency = require('../models/currency');


router.get('/currency/', async(req, res) => {
  Currency.findAll()
  .then((currency) => {
    res.json(currency);
  })
  .catch((error) => {
    console.log(error);
    return res.status(500).json({ message: error.message });
  });
})

router.get('/currency/:id', async(req, res) => {
  const id = req.params.id;
  try {
    const currency = await Currency.findOne({
      where: { id: id },
    });
    res.json(currency);
  } catch (error) {
    console.log('Error getting currency:', error);
    return res.status(500).json({ message: error.message });
  }
});

router.post('/currency/', async (req, res) => {
  try {
   const currency = await Currency.create({
      currencyCode: req.body.currencyCode,
      countryId: req.body.countryId,
      convertionRate: req.body.convertionRate,
    });
    console.log('Currency added');
    res.status(201).json(currency);
  } catch (error) {
    console.log('Error creating currency:', error);
    return res.status(500).json({ message: error.message });
  }
});

router.put('/currency/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const currency = await Currency.findByPk(id);
    await currency.update(req.body);
    console.log('Currency updated');
    res.status(201)
    res.json(currency);
  } catch(error){
    console.log('Currency updated error:', error);
    return res.status(500).json({ message: error.message });
  }
});
  
router.delete('/currency/:id', async (req, res) => {
  const id = req.params.id;
  
  try {
    const deleteCurrency = await Currency.findByPk(id);
    if (deleteCurrency) {
      await deleteCurrency.destroy()
      .then((deletedItem) => {
        res.status(204).json(deletedItem);
      });
    } else {
      res.status(404).send('Item not exist');
    }
  } catch (error) {
    console.log('Error deleting currency:', error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;