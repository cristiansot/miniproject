/* The `logger` function is a middleware function that logs information about incoming requests. It
takes three parameters: `req` (request), `res` (response), and `next` (a function to call the next
middleware in the chain). */
const logger = ((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`
  );
  next();
});

/* The `unknownMiddleware` function is a middleware function that is called when the server receives a
request for an unknown endpoint. It logs a message saying "Unknown endpoint" and sends a response
with a JSON object containing the message "Unknown endpoint". */
const unknownMiddleware = ((req, res, next) => {
  console.log('Unknown endpoint')
  res.send({ message: 'Unknown endpoint'})
})

/* `module.exports` is a special object in Node.js that is used to define the public interface of a
module. By assigning an object to `module.exports`, we are specifying what functions, objects, or
values should be accessible to other modules when they require this module. */
module.exports = {
    logger,
    unknownMiddleware,
};