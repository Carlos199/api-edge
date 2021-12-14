const { Router } = require('express')
const router = Router()

const productsCtrl = require('../controllers/products.controller.js')
const { authJwt, isAdmin, verifyToken } = require('../middlewares/authJwt.js')

router.post('/', [verifyToken], productsCtrl.createProduct)
router.get('/', productsCtrl.getProducts)
router.get('/:productId', productsCtrl.getProductById)
router.put(
  '/:productId',
  [verifyToken, isAdmin],
  productsCtrl.updateProductById
)
router.delete(
  '/:productId',
  [verifyToken, isAdmin],
  productsCtrl.deleteProductById
)

module.exports = router
