import {Router} from 'express'
import multer from 'multer'
import { CreateUserController } from './controllers/User/CreateUserController'
import {AuthUserController} from './controllers/User/AuthUserController'
import { DetailUserController } from './controllers/User/DetailUserController'

import { CreateCategoryController } from './controllers/Category/CreateCategoryController'
import { ListCategoryController } from './controllers/Category/ListCategoryController'

import { CreateProductController } from './controllers/Product/CreateProductController'
import { ListByCategoryController } from './controllers/Product/ListByCategoryController'

import { CreateOrderController } from './controllers/Order/CreateOrderController'
import { RemoveOrderController } from './controllers/Order/RemoveOrderController'
import { AddItemController } from './controllers/Order/AddItemController'
import { RemoveItemController } from './controllers/Order/RemoveItemController'
import { SendOrderController } from './controllers/Order/SendOrderController'
import { ListOrderController } from './controllers/Order/ListOrderController' 
import { DetailOrderController } from './controllers/Order/DetailOrderController'

import { FinishOrderController } from './controllers/Order/FinishOrderController'

import { auth } from './middlewares/auth'

import uploadConfig from './config/multer'

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))

router.post('/users', new CreateUserController().handle) //Login
router.post('/session', new AuthUserController().handle)
router.get('/me', auth, new DetailUserController().handle)

router.post('/category', auth, new CreateCategoryController().handle)
router.get('/category', auth, new ListCategoryController().handle)

router.post('/product', auth, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', auth, new ListByCategoryController().handle)

router.post('/order',auth, new CreateOrderController().handle)
router.delete('/order', auth, new RemoveOrderController().handle)
router.post('/order/add', auth, new AddItemController().handle)
router.delete('/order/remove', auth, new RemoveItemController().handle)
router.put('/order/send', auth, new SendOrderController().handle)
router.get('/orders', auth, new ListOrderController().handle)
router.get('/order/detail', auth, new DetailOrderController().handle)
router.put('/order//finish', auth, new FinishOrderController().handle)


 

export {router}