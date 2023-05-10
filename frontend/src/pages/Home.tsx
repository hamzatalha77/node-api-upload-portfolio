import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Home = () => {
  const [portfolios, setPortfolios] = useState([])
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
          <h1></h1>
        </div>
      ))}
    </div>
  )
}

export default Home
