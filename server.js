const express = require('express')
const cors = require('cors') 
const app = express(); 
const morgan = require ('morgan');
require("dotenv").config();
const sequelize = require ('./config/sequelize');
const middlewares = require('./utils/middlewares')

/* `app.use(cors())` is enabling Cross-Origin Resource Sharing (CORS) for the Express application. CORS
is a mechanism that allows resources (e.g., APIs) on a web page to be requested from another domain
outside the domain from which the resource originated. By using `cors()`, the Express application
allows requests from any origin. */
app.use(cors())
app.use(express.json())

/* `app.use(morgan('tiny'))` is setting up the Morgan middleware in the Express application. Morgan is
a logging middleware for Node.js that logs HTTP requests and responses. */
app.use(morgan('tiny'))

/* `app.use(middlewares.logger);` is using the `logger` middleware in the Express application. The
`logger` middleware is a custom middleware function defined in the `middlewares.js` file. It is
responsible for logging information about incoming requests to the server. By using `app.use`, the
middleware is applied to all routes in the application, meaning that it will be executed for every
incoming request. */
app.use(middlewares.logger);

/* These lines of code are including and using the route files for handling specific routes in the
Express application. */
app.use(require('./routes/currencyRoute'));
app.use(require('./routes/countryRoute'));
app.use(require('./routes/getRoute'));

/* `app.use(middlewares.unknownMiddleware);` is using the `unknownMiddleware` middleware in the Express
application. The `unknownMiddleware` middleware is a custom middleware function defined in the
`middlewares.js` file. */
app.use(middlewares.unknownMiddleware);

/**
 * The function `connect` attempts to authenticate with a database using Sequelize and logs a message
 * indicating whether the connection was successful or not.
 */
const connect = async () => {

  try{
    await sequelize.authenticate();
    console.log("Database Online")
    
  }catch(error) {
    console.log('Database not connected')
  }
}

connect();

/* This code block is responsible for starting the server and listening for incoming requests on a
specified port. */
const PORT = process.env.PORT
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('DB is Sync')
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`)
    }) 
  })
  .catch((error) => {
    console.log('Error creating currency table')
  })


