import React from 'react'
import './main.css'
import Main from './pages/Main'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Main}></Route>
        <Route path="/home" Component={Home}></Route>
      </Routes>
    </Router>
  )
}

export default App
