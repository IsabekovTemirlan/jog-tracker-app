import { applyMiddleware, createStore, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import { appReducer } from "./reducers/app.reducer";
import { jogsReducer } from "./reducers/jog.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  jogs: jogsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)) )
