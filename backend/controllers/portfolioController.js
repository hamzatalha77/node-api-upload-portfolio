import asyncHandler from 'express-async-handler'
import Portfolio from '../model/portfolioModel.js'

const getPortfolios = asyncHandler(async (req, res) => {
  const portfolios = await Portfolio.find({})
  res.json(portfolios)
})

const createPortfolio = asyncHandler(async (req, res) => {
  try {
    const portfolio = new Portfolio({
      name: req.body.name,
      image: req.body.image,
      github: req.body.github,
      live: req.body.live,
    })
    const createdPortfolio = await portfolio.save()
    res.json(201).json(createdPortfolio)
  } catch (error) {
    res.json(400).json(error.message)
  }
})
export { getPortfolios, createPortfolio }
