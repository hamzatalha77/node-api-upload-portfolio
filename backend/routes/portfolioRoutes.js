import express from 'express'
import {
  createPortfolio,
  getPortfolios,
} from '../controllers/portfolioController.js'
const router = express.Router()
router.route('/').get(getPortfolios)
router.route('/add').post(createPortfolio)
export default router
