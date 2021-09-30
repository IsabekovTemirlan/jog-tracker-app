import { INIT_APP, LOST_TOKEN, HIDE_FILTER_BAR, HIDE_MOBILE_MENU, SHOW_FILTER_BAR, SHOW_MOBILE_MENU } from "../consts"

const initialState = {
  appReady: false,
  filterBarVisible: false,
  mobileMenuVisible: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP: return { ...state, appReady: true }
    case LOST_TOKEN: return { ...state, appReady: true }
    case SHOW_FILTER_BAR: return { ...state, filterBarVisible: true }
    case HIDE_FILTER_BAR: return { ...state, filterBarVisible: false }
    case SHOW_MOBILE_MENU: return { ...state, mobileMenuVisible: true }
    case HIDE_MOBILE_MENU: return { ...state, mobileMenuVisible: false }
    default: return state
  }
}