import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import colors from 'colors'
import portfolioRoutes from './routes/portfolioRoutes.js'
dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/portfolio', portfolioRoutes)

app.get('/', (req, res) => {
  res.send('hello word')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold))