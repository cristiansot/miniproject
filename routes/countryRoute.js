const { Router } = require('express');
const router = Router();
const Country = require('../models/country');

router.get('/country/', async(req, res) => {
    Country.findAll()
    .then((country) => {
      res.json(country);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({ message: error.message });
    });
  })
  
  router.post('/country/', async (req, res) => {
    try {
     const country = await Country.create({
       name: req.body.name,
      });
      console.log('Country added');
      res.status(201).json(country);
    } catch (error) {
      console.log('Error creating currency:', error);
      return res.status(500).json({ message: error.message });
    }
  });
    
  router.delete('/country/:id', async (req, res) => {
    const countryId = req.params.id;
  
    try {
      await Country.destroy({ where: { id: countryId } });
      res.status(204).send('Country deleted successfully');
    } catch (error) {
      console.log('Error deleting country:', error);
      return res.status(500).json({ message: error.message });
    }
  });

module.exports = router;