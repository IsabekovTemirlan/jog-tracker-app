import { Greating } from '../components'
import { ContactUsPage, InfoPage, JogsPage } from '../pages'

export const routeNames = {
    GREATING: '/greating',
    JOGS: '/jogs',
    INFO: '/info',
    CONTACT_US: '/contact-us'
}

export const publicRoutes = [
    { path: routeNames.GREATING, exact: true, component: Greating },
]

export const privateRoutes = [
    { path: routeNames.JOGS, exact: true, component: JogsPage },
    { path: routeNames.INFO, exact: true, component: InfoPage },
    { path: routeNames.CONTACT_US, exact: true, component: ContactUsPage },
]