import express from 'express'
import internalPredictionsController from '../../controllers/internal-predictions'
import sanitizeBody from '../../middlewares/sanitize'

const router = express.Router()

// CREATE
router.post(['/', '/:id'], sanitizeBody, internalPredictionsController.createInternalPrediction)

export default router
