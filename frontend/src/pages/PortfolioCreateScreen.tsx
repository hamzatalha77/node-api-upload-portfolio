import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { createPortfolio } from '../actions/portfolioActions'
import { PORTFOLIOS_CREATE_RESET } from '../constants/portfolioConstants'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
  const [image, setImage] = useState('')
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

  const uploadFileHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target as HTMLInputElement
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0]
      const formData = new FormData()
      formData.append('image', file)

      try {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }

        const { data } = await axios.post('/api/upload', formData, config)

        setImage(data)
      } catch (error) {
        console.error(error)
      }
    }
  }

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      createPortfolio({
        name,
        github,
        live,
        image,
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
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input type="file" onChange={uploadFileHandler} />
      <button type="submit">Send!</button>
    </form>
  )
}

export default PortfolioCreateScreen
