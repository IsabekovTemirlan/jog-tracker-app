import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as AppActions from "../store/actions/app.action"
import * as JogsActions from "../store/actions/jogs.action"

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators({
    ...AppActions,
    ...JogsActions
  }, dispatch)
}