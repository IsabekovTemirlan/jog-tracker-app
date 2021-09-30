import { ADD_JOG, GET_JOGS, UPDATE_JOG, FILTER_JOGS } from "../consts"

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