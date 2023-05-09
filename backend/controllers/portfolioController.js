import asyncHandler from 'express-async-handler'
import Portfolio from '../model/portfolioModel.js'

const getPortfolios = asyncHandler(async (req, res) => {
  const portfolios = await Portfolio.find({})
  res.json(portfolios)
})
export { getPortfolios }
