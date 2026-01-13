export const errorHandler = (err, req, res, next) => {
  let statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500
  let message = err.message || 'An error occurred'

  res.status(statusCode).json({
    message,
  })
}
