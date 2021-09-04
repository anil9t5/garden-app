import * as types from "../types"
import nonwoodyPlantData from "../../data/nonwoody_plants.json"
import woodyPlantData from "../../data/woody_plants.json"

export const fetchWoodyPlantPosts = () => async (dispatch) => {
  dispatch({
    type: types.GET_WOODYPLANTS,
    payload: woodyPlantData,
  })
}

export const fetchNonWoodyPlantPosts = () => async (dispatch) => {
  dispatch({
    type: types.GET_NONWOODYPLANTS,
    payload: nonwoodyPlantData.data,
  })
}
