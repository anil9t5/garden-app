import * as types from "../types"
import * as api from "../../generics/api"
const API_URL = process.env.API_URL

export const fetchPlantPosts = () => async (dispatch) => {
  const response = await api.get(`${API_URL}plants`)
  dispatch({
    type: types.GET_PLANTS,
    payload: response.data,
  })
}
