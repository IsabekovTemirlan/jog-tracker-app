import { HIDE_FILTER_BAR, HIDE_MOBILE_MENU, SHOW_FILTER_BAR, SHOW_MOBILE_MENU } from "../consts"

const initialState = {
  filterBarVisible: false,
  mobileMenuVisible: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FILTER_BAR: return { ...state, filterBarVisible: true }
    case HIDE_FILTER_BAR: return { ...state, filterBarVisible: false }
    case SHOW_MOBILE_MENU: return { ...state, mobileMenuVisible: true }
    case HIDE_MOBILE_MENU: return { ...state, mobileMenuVisible: false }
    default: return state
  }
}