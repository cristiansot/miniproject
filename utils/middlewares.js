const logger = ((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`
  );
  next();
});

const unknownMiddleware = ((req, res, next) => {
  console.log('Unknown endpoint')
  res.send({ message: 'Unknown endpoint'})
})

module.exports = {
    logger,
    unknownMiddleware,
};