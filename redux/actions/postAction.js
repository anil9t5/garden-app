import * as types from "../types"
import * as api from "../../generics/api"
const API_URL = process.env.API_URL

export const fetchWoodyPlantPosts = () => async (dispatch) => {
  const response = await api.get(`${API_URL}plants`)
  dispatch({
    type: types.GET_WOODYPLANTS,
    payload: response.data,
  })
}

export const fetchNonWoodyPlantPosts = () => async (dispatch) => {
  const response = await api.get(`${API_URL}plants`)
  dispatch({
    type: types.GET_NONWOODYPLANTS,
    payload: response.data,
  })
}
