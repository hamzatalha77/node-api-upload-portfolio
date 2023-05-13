import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPortfolio } from '../actions/portfolioActions'
import { PORTFOLIOS_CREATE_RESET } from '../constants/portfolioConstants'

const Main = (history: any) => {
  const [name, setName] = useState('')
  const [github, setGithub] = useState('')
  const [live, setLive] = useState('')

  const dispatch = useDispatch()

  const portfolioCreate = useSelector((state: any) => state.portfolioCreate)

  const { loading: loadingCreate, success: successCreate } = portfolioCreate

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PORTFOLIOS_CREATE_RESET })
      history.push('/home')
    }
  }, [dispatch, history, successCreate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createPortfolio({
        name,
        github,
        live,
      })
    )
  }

  return (
    <div className="h-screen w-full bg-slate-400">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Project name..."
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Github code source..."
          name="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project Url..."
          name="live"
          value={live}
          onChange={(e) => setLive(e.target.value)}
        />
        <button type="submit">Send !</button>
      </form>
    </div>
  )
}

export default Main
