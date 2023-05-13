import { Dispatch } from 'redux'
import axios from 'axios'
import {
  PORTFOLIOS_CREATE_REQUEST,
  PORTFOLIOS_CREATE_SUCCESS,
  PORTFOLIOS_CREATE_FAIL,
} from '../constants/portfolioConstants'

export const createPortfolio =
  (portfolioData: any) => async (dispatch: any) => {
    try {
      dispatch({ type: PORTFOLIOS_CREATE_REQUEST })

      // Make API call using axios
      const { data } = await axios.post('/api/portfolios', portfolioData)

      dispatch({
        type: PORTFOLIOS_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PORTFOLIOS_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
