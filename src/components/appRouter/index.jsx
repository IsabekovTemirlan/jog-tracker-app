import { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getToken } from '../../api'
import { useAuth } from '../../hooks/useAuth'
import { privateRoutes, publicRoutes, routeNames } from "../../router"

export const AppRouter = () => {
  const {token} = useAuth()

  return (
    token ?
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