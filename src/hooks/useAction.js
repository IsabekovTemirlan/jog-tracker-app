import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as AppActions from "../store/actions/app.action"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({
    ...AppActions
  }, dispatch)
}