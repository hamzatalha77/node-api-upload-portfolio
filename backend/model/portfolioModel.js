import mongoose from 'mongoose'

const portfolioSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  github: {
    type: String,
    required: true,
  },
  live: {
    type: String,
    required: true,
  },
})
const Portfolio = mongoose.model('Portfolio', portfolioSchema)
export default Portfolio
