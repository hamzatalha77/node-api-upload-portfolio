import React, { useState } from 'react'

const Main = () => {
  const [portfolios, setPortfolios] = useState([])
  return (
    <div className="h-screen w-full bg-slate-400">
      <div>
        <input type="text" placeholder="Project name..." name="name" />
        <input type="text" placeholder="Github code source..." name="github" />
        <input type="text" placeholder="Project Url..." name="live" />
      </div>
    </div>
  )
}

export default Main
