import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { createPortfolio } from '../actions/portfolioActions'
import { PORTFOLIOS_CREATE_RESET } from '../constants/portfolioConstants'
import { useNavigate } from 'react-router-dom'
interface RootState {
  portfolioCreate: {
    loading: boolean
    success: boolean
    error: boolean
    // ... other properties
  }
}

const PortfolioCreateScreen = () => {
  const [name, setName] = useState('')
  const [github, setGithub] = useState('')
  const [live, setLive] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch<Dispatch<any>>()

  const portfolioCreate = useSelector(
    (state: RootState) => state.portfolioCreate
  )

  const { success: successCreate, error: errorCreate } = portfolioCreate

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PORTFOLIOS_CREATE_RESET })
      navigate('/pushme')
    }
  }, [dispatch, successCreate, errorCreate, navigate])

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Project name..."
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Github code source..."
        name="github"
        onChange={(e) => setGithub(e.target.value)}
      />
      <input
        type="text"
        placeholder="Project Url..."
        name="live"
        onChange={(e) => setLive(e.target.value)}
      />
      <button type="submit">Send !</button>
    </form>
  )
}

export default PortfolioCreateScreen
