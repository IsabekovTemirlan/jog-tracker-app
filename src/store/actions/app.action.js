import { getToken } from "../../api"
import { INIT_APP, LOST_TOKEN, HIDE_FILTER_BAR, HIDE_MOBILE_MENU, SHOW_FILTER_BAR, SHOW_MOBILE_MENU } from "../consts"

export const initApp = () => async (dispatch) => {
  const result = await getToken()
  if (result?.access_token) {
    dispatch({ type: INIT_APP })
    localStorage.setItem('jog_tracker_app_data', result?.access_token)
  }
}
export const lostToken = () => async (dispatch) => { dispatch({ type: LOST_TOKEN }) }

export const showFilterBar = () => (dispatch) => { dispatch({ type: SHOW_FILTER_BAR }) }
export const hideFilterBar = () => (dispatch) => { dispatch({ type: HIDE_FILTER_BAR }) }

export const showMobileMenu = () => (dispatch) => { dispatch({ type: SHOW_MOBILE_MENU }) }
export const hideMobileMenu = () => (dispatch) => { dispatch({ type: HIDE_MOBILE_MENU }) }