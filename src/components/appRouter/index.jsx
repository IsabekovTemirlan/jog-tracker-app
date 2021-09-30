import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes, routeNames } from "../../router"

export const AppRouter = () => {
  const { appReady } = useSelector(state => state.app)

  return (
    (appReady) ?
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