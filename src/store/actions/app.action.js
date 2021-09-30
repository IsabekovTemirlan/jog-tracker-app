import { getToken } from "../../api"
import { INIT_APP, LOST_TOKEN, HIDE_MOBILE_MENU, SHOW_MOBILE_MENU } from "../consts"
const STORAGE = 'jog_tracker_app_data'

export const initApp = (init = false) => async (dispatch) => {
  const oldToken = localStorage.getItem(STORAGE)

  if (!init && oldToken === null) {
    const result = await getToken()
    if (result?.access_token) {
      localStorage.setItem(STORAGE, result?.access_token)
      dispatch({ type: INIT_APP })
    }  
  } else if (init && oldToken?.length) dispatch({ type: INIT_APP })
}

export const lostToken = () => async (dispatch) => { dispatch({ type: LOST_TOKEN }) }
export const showMobileMenu = () => (dispatch) => { dispatch({ type: SHOW_MOBILE_MENU }) }
export const hideMobileMenu = () => (dispatch) => { dispatch({ type: HIDE_MOBILE_MENU }) }