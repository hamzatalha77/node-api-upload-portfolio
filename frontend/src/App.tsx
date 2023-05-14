import React from 'react'
import './main.css'
import PortfolioCreateScreen from './pages/PortfolioCreateScreen'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={PortfolioCreateScreen}></Route>
        <Route path="/home" Component={Home}></Route>
      </Routes>
    </Router>
  )
}

export default App
