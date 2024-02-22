const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require('morgan');
const Middelware = require('./utils/middlewares')

// const currencyRouter = require('./routes/currencyRoute')
// const countryRouter = require('./routes/countryRoute');
const sequelize = require('./config/sequelize');

/* Initializations */
app.use(cors())
app.use(express.json())

/* Middelware request */
app.use(Middelware.logger);
app.use(morgan('tiny'))

/* Middleware morgan*/
morgan.token('req-body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req-body'));
app.use(morgan('tiny'))

/* Router */
app.use(require('./routes/currencyRoute'));
app.use(require('./routes/countryRoute'));
app.use(require('./routes/getRoute'));

/* Middelware response */
app.use(Middelware.unknownMiddleware)

//Port connection
PORT = process.env.PORT
sequelize
  .sync({ })
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  });
}) 
.catch((error) => {
  console.error('Error in syncing the Database:', error)
});