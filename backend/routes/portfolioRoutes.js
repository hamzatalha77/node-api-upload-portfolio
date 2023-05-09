import express from 'express'
import { getPortfolios } from '../controllers/portfolioController.js'
const router = express.Router()
router.route('/').get(getPortfolios)
export default router
