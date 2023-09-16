import {Router} from 'express'
import * as controller from '../controllers/queries.controllers.js'

const router = Router()

router.get('/consulta11', controller.query11)
router.get('/consulta10', controller.query10)
router.get('/consulta9', controller.query9)
router.get('/consulta8', controller.query8)
router.get('/consulta7', controller.query7)
router.get('/consulta6', controller.query6)
router.get('/consulta5', controller.query5)
router.get('/consulta4', controller.query4)
router.get('/consulta3', controller.query3)
router.get('/consulta2', controller.query2)
router.get('/consulta1', controller.query1)

export default router