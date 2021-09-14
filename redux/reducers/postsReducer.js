import * as types from "../types"
const initialState = {
  plants_list: [],
}
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PLANTS:
      return {
        ...state,
        plants_list: action.payload,
      }
    default:
      return state
  }
}
