import React, { useState, useEffect } from 'react'
import axios from 'axios'
interface Portfolio {
  _id: string
  name: string
  // add more properties as needed
}
const Home = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  useEffect(() => {
    const fetchProtfolios = async () => {
      const { data } = await axios.get('/api/portfolios')
      setPortfolios(data)
    }
    fetchProtfolios()
  }, [])
  return (
    <div>
      {portfolios.map((portfolio) => (
        <div key={portfolio._id}>
          <h1>{portfolio.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Home
