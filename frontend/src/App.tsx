import React from 'react'
import './main.css'
import PortfolioCreateScreen from './pages/PortfolioCreateScreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={PortfolioCreateScreen}></Route>
      </Routes>
    </Router>
  )
}

export default App
