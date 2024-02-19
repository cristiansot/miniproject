const countryRouter = require('express').Router();
const Country = require('../models/country');

/* The code `router.get('/country/', async(req, res) => { ... })` is defining a GET route for the
'/country/' endpoint. When a GET request is made to this endpoint, the code inside the callback
function will be executed. */
countryRouter.get('/country/', async(req, res) => {
  await Country.findAll()
    .then((country) => {
      res.json(country);
      console.log('Getting country')
    })
    .catch((error) => {
      console.log(error);
      console.log('Not get the country')
      return res.status(500).json({ message: error.message });
    });
  })
  
/* The code `router.post('/country/', async (req, res) => { ... })` is defining a POST route for the
'/country/' endpoint. When a POST request is made to this endpoint, the code inside the callback
function will be executed. */

countryRouter.post('/country/', async (req, res) => {
  try {
    const country = await Country.create({
      name: req.body.name,
    });
    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
    
/* The code `router.delete('/country/:id', async (req, res) => { ... })` is defining a DELETE route for
the '/country/:id' endpoint. When a DELETE request is made to this endpoint with a specific country
ID, the code inside the callback function will be executed. */
countryRouter.delete('/country/:id', async (req, res) => {
  const countryId = req.params.id;

  try {
    await Country.destroy({ where: { id: countryId } });
    res.status(204).send('Country deleted successfully');
  } catch (error) {
    console.log('Error deleting country:', error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = countryRouter;