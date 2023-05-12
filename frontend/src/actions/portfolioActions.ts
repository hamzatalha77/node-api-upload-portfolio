import { Dispatch } from 'redux'
import axios from 'axios'
import {
  PORTFOLIOS_CREATE_REQUEST,
  PORTFOLIOS_CREATE_SUCCESS,
  PORTFOLIOS_CREATE_FAIL,
} from '../constants/portfolioConstants'

export const createPortfolio = () => async (dispatch: Dispatch) => {
  dispatch({
    type: PORTFOLIOS_CREATE_REQUEST,
  })
  const { data } = await axios.get(`api/portfolios`, {})
  dispatch({
    type: PORTFOLIOS_CREATE_SUCCESS,
    payload: data,
  })
  dispatch({
    type: PORTFOLIOS_CREATE_FAIL,
  })
}
