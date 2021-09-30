import { INIT_APP, LOST_TOKEN, HIDE_MOBILE_MENU, SHOW_MOBILE_MENU } from "../consts"

const initialState = {
  appReady: false,
  mobileMenuVisible: false
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP: return { ...state, appReady: true }
    case LOST_TOKEN: return { ...state, appReady: true }
    case SHOW_MOBILE_MENU: return { ...state, mobileMenuVisible: true }
    case HIDE_MOBILE_MENU: return { ...state, mobileMenuVisible: false }
    default: return state
  }
}