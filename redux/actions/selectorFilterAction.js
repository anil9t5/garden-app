import * as types from "../types"

// export const selectorFilterData = (option) => async (dispatch) => {
//   dispatch({
//     type: types.SELECTOR_FILTER,
//     payload: option,
//   })
// }

// export const checkFilterData = (option) => async (dispatch) => {
//   dispatch({
//     type: types.FILTER_CHECKED,
//     payload: option,
//   })
// }

export const selectorFilterData = (option) => async (dispatch) => {
  dispatch({
    type: types.SELECTED_FILTER_LIST,
    payload: option,
  })
}

export const activeFilterData = (option) => async (dispatch) => {
  dispatch({
    type: types.ACTIVE_SELECTOR_LIST,
    payload: option,
  })
}
