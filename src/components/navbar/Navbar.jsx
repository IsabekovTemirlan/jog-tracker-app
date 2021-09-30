import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { MobileMenu } from '..'
import { useActions } from '../../hooks/useAction'
import { routes } from '../../config/index'
import logo from '../../assets/icons/logo.svg'
import filterActiveIcon from '../../assets/icons/filter-active.svg'
import filterIcon from '../../assets/icons/filter.svg'
import menuIcon from '../../assets/icons/menu.png'
import './style.css'

export const Navbar = () => {
  const { mobileMenuVisible, appReady } = useSelector(state => state.app);
  const { filterBarVisible } = useSelector(state => state.jogs)
  const { showFilterBar, hideFilterBar, showMobileMenu } = useActions();
  const { pathname } = useLocation();

  return (
    <>
      <div className="navbar f-between">
        <div className="logo">
          <Link to="/jogs"><img src={logo} /> </Link>
        </div>
        {appReady ? <ul className="nav-list f-center">
          {routes.map(route => <li key={route.path} className={`nav-item ${pathname === route.path ? 'active' : ''}`}>
            <Link to={route.path}>{route.title}</Link></li>
          )}
          <div className="nav-icons f-center">
            {filterBarVisible
              ? <img onClick={hideFilterBar} src={filterActiveIcon} />
              : <img onClick={showFilterBar} src={filterIcon} />
            }
          </div>
          <img className="nav-icon mobile-menu-icon" onClick={showMobileMenu} src={menuIcon} />
        </ul> : ''}
      </div>
      {mobileMenuVisible && <MobileMenu />}
    </>
  )
}
