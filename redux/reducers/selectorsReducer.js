import * as types from "../types"
import * as options from "../../data/sideNavListDataArray"

const initialState = {
  habitat: new Array(options.habitat.length).fill(false),
  flowerPetalColor: new Array(options.flowerPetalColor.length).fill(false),
  leafBladeEdges: new Array(options.leafBladeEdges.length).fill(false),
  leafType: new Array(options.leafType.length).fill(false),
  leafArrangement: new Array(options.leafArrangement.length).fill(false),
  county: new Array(options.newBrunswickCounty.length).fill(false),
  selectorFilter: "none",
  filterChecked: false,
  selectorFilterList: [],
  activeFilterList: [],
}

export const selectorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_HABITAT:
      return {
        ...state,
        habitat: action.payload,
      }
    case types.TOGGLE_FLOWER_PETAL_COLOR:
      return {
        ...state,
        flowerPetalColor: action.payload,
      }
    case types.TOGGLE_LEAF_BLADE_EDGES:
      return {
        ...state,
        leafBladeEdges: action.payload,
      }
    case types.TOGGLE_LEAF_TYPE:
      return {
        ...state,
        leafType: action.payload,
      }
    case types.TOGGLE_LEAF_ARRANGEMENT:
      return {
        ...state,
        leafArrangement: action.payload,
      }
    case types.TOGGLE_COUNTY:
      return {
        ...state,
        county: action.payload,
      }
    case types.SELECTOR_FILTER:
      return {
        ...state,
        selectorFilter: action.payload,
      }
    case types.FILTER_CHECKED:
      return {
        ...state,
        filterChecked: !state.filterChecked,
      }
    case types.ACTIVE_SELECTOR_LIST:
      return {
        ...state,
        activeFilterList: action.payload,
      }
    case types.SELECTED_FILTER_LIST:
      return {
        ...state,
        selectorFilterList: action.payload,
      }
    default:
      return state
  }
}
