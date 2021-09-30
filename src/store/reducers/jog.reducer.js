import { ADD_JOG, GET_JOGS, UPDATE_JOG } from "../consts"

const initialState = []

export const jogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOGS: return state
    case ADD_JOG: return [...state, action.payload]
    case UPDATE_JOG: return [...state.map(jog => jog.id === action.payload.id ? ({ ...jog, ...action.payload }) : jog)]
    default: return state
  }
}