import * as types from "../types"
const initialState = {
  woody_plants: [],
  nonwoody_plants: [],
}
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WOODYPLANTS:
      return {
        ...state,
        woody_plants: action.payload,
      }
    case types.GET_NONWOODYPLANTS:
      return {
        ...state,
        nonwoody_plants: action.payload,
      }
    default:
      return state
  }
}
