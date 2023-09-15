import { Router } from "express";
import * as controller from '../controllers/db.controllers.js'

const router = Router()

router.get('/crearmodelo', controller.createModel)
router.get('/eliminarmodelo', controller.deleteModel)
router.get('/cargarmodelo', controller.loadData)

export default router
