const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require('morgan');
const Middleware = require('./utils/middlewares')
const sequelize = require('./config/sequelize');

/* Initializations */
app.use(cors())
app.use(express.json())

/* Middelware request */
app.use(Middleware.logger);

/* Middleware morgan*/
morgan.token('req-body', (req) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req-body'));
app.use(morgan('tiny'))

/* Router */
app.use(require('./routes/currencyRoute'));
app.use(require('./routes/countryRoute'));
app.use(require('./routes/getRoute'));

/* Middelware response */
app.use(Middleware.unknownMiddleware)

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