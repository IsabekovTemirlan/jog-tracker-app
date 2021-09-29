import { HIDE_FILTER_BAR, HIDE_MOBILE_MENU, SHOW_FILTER_BAR, SHOW_MOBILE_MENU } from "../consts"

export const showFilterBar = () => (dispatch) => { dispatch({ type: SHOW_FILTER_BAR }) }
export const hideFilterBar = () => (dispatch) => { dispatch({ type: HIDE_FILTER_BAR }) }

export const showMobileMenu = () => (dispatch) => { dispatch({ type: SHOW_MOBILE_MENU }) }
export const hideMobileMenu = () => (dispatch) => { dispatch({ type: HIDE_MOBILE_MENU }) }