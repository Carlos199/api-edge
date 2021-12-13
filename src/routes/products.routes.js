import { Router } from 'express'
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import { authJwt } from '../middlewares'
import { isAdmin } from '../middlewares/authJwt'

router.post('/', [authJwt.verifyToken], productsCtrl.createProduct)
router.get('/', productsCtrl.getProducts)
router.get('/:productId', productsCtrl.getProductById)
router.put(
  '/:productId',
  [authJwt.verifyToken, isAdmin],
  productsCtrl.updateProductById
)
router.delete(
  '/:productId',
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
)

export default router
