import { filterByDateRange, updateArrayOfObjects } from "../../utils"
import { ADD_JOG, GET_JOGS, UPDATE_JOG, FILTER_JOGS, SHOW_FILTER_BAR, HIDE_FILTER_BAR } from "../consts"

const initialState = {
  allJogs: [],
  filteredJogs: [],
  filterBarVisible: false,
}

export const jogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOGS: return { ...state }
    case ADD_JOG: return { ...state, allJogs: [...state.allJogs, action.payload] }
    case UPDATE_JOG: return { ...state, allJogs: [...updateArrayOfObjects(state.allJogs, action.payload)] }
    case FILTER_JOGS: return { ...state, filteredJogs: [...filterByDateRange(state.allJogs, action.payload)] }
    case SHOW_FILTER_BAR: return { ...state, filterBarVisible: true }
    case HIDE_FILTER_BAR: return { ...state, filteredJogs: [], filterBarVisible: false }
    default: return state
  }
}