import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes, routeNames } from "../../router"

export const AppRouter = () => {
  const isAuth = true //useSelector(state => state.auth);

  return (
    isAuth ?
      <Switch>
        {privateRoutes.map(route =>
          <Route path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        )}
        <Redirect to={routeNames.JOGS} />
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        )}
        <Redirect to={routeNames.GREATING} />
      </Switch>
  )
}