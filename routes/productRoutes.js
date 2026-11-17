const express = require('express');
const ctrl = require('../controllers/productController');
const { validateObjectId, validateBodyPresent, validateStockChange } = require('../middleware/validate');

const router = express.Router();

// NOTE: static routes must come BEFORE "/:id", otherwise "low-stock" / "summary" get treated as an id
router.get('/low-stock', ctrl.getLowStock);
router.get('/summary', ctrl.getSummary);

router.route('/')
  .get(ctrl.getProducts)
  .post(validateBodyPresent, ctrl.createProduct);

router.patch('/:id/stock', validateObjectId, validateStockChange, ctrl.adjustStock);

router.route('/:id')
  .get(validateObjectId, ctrl.getProductById)
  .put(validateObjectId, validateBodyPresent, ctrl.updateProduct)
  .delete(validateObjectId, ctrl.deleteProduct);

module.exports = router;
