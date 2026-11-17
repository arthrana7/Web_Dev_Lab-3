const mongoose = require('mongoose');
const { AppError } = require('./errorHandler');

// Checks that :id is a valid MongoDB ObjectId
const validateObjectId = (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return next(new AppError(`Invalid product ID: ${req.params.id}`, 400));
  }
  next();
};

// Body must be a non-empty JSON object
const validateBodyPresent = (req, res, next) => {
  if (!req.body || typeof req.body !== 'object' || Object.keys(req.body).length === 0) {
    return next(new AppError('Request body cannot be empty', 400));
  }
  next();
};

// Stock adjustment body: { "change": <non-zero integer> }
const validateStockChange = (req, res, next) => {
  const { change } = req.body || {};
  if (typeof change !== 'number' || !Number.isInteger(change) || change === 0) {
    return next(
      new AppError('"change" must be a non-zero integer (positive = restock, negative = sale)', 400)
    );
  }
  next();
};

module.exports = { validateObjectId, validateBodyPresent, validateStockChange };
