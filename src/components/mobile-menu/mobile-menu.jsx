import { NavLink } from 'react-router-dom'
import { NAV } from '../../constants/navigation'

import './mobile-menu.scss'

export const MobileMenu = ({ pathname }) => (
    <div className="mobile_menu">
        <ul className='mobile_menu_list'>
            {NAV?.movies?.map(({ title, path, id }) => (
                <li key={id} className='mobile_menu_item'>
                    <NavLink to={`${path}/1`} className={path === pathname ? 'mobile_menu_item-link mobile_active' : 'mobile_menu_item-link'}>{title}</NavLink>
                </li>
            ))}
        </ul>
    </div>
)