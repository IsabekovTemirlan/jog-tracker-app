import { ADD_JOG, GET_JOGS, UPDATE_JOG, FILTER_JOGS, HIDE_FILTER_BAR, SHOW_FILTER_BAR } from "../consts"

export const getJogs = () => (dispatch) => {
  dispatch({type: GET_JOGS, payload: []})
}

export const addJog = (newJog) => (dispatch) => {
  dispatch({type: ADD_JOG, payload: newJog})
}

export const updateJog = (newJog) => (dispatch) => {
  dispatch({type: UPDATE_JOG, payload: newJog})
}

export const filterJogs = (range) => (dispatch) => {
  dispatch({type: FILTER_JOGS, payload: range})
}

export const showFilterBar = () => (dispatch) => { dispatch({ type: SHOW_FILTER_BAR }) }
export const hideFilterBar = () => (dispatch) => {
  dispatch({ type: HIDE_FILTER_BAR })
  dispatch({ type: GET_JOGS })
}
