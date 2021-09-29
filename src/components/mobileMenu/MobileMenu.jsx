import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useAction'
import { useLocation } from 'react-router-dom'
import { routes } from '../../config/index'
import closeBtn from '../../assets/icons/mobile-cancel.svg'
import logo from '../../assets/icons/logo2.png'
import './style.css'

export const MobileMenu = () => {
  const { hideMobileMenu } = useActions();
  const { pathname } = useLocation();

  return (
    <div className="mobile-menu">
      <div className="menu-top f-between">
        <img className="menu-logo" src={logo} />
        <img className="menu-close" onClick={hideMobileMenu} src={closeBtn} />
      </div>
      <ul className="menu-list">
        {routes.map(route => <li key={route.path} className={`menu-item ${pathname === route.path ? 'menu-item-active' : ''}`}>
          <Link onClick={hideMobileMenu} to={route.path}>{route.title}</Link>
        </li>)}
      </ul>
    </div>
  )
}