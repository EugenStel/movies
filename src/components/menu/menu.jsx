import { NavLink } from 'react-router-dom'
import { NAV } from '../../constants/navigation'
import './menu.scss'

export const Menu = ({ pathname }) => (
    <>
        <NavLink to='/' className={pathname === '/' ? 'menu_item-link menu_item menu_active' : 'menu_item-link menu_item'}>Home</NavLink>
        <h3 className='nav_header'>Movies</h3>
        <ul className='menu_list'>
            {NAV?.movies?.map(({ title, path, id }) => (
                <li key={id} className='menu_item'>
                    <NavLink to={`${path}/1`} className={path === pathname ? 'menu_item-link menu_active' : 'menu_item-link'}>{title}</NavLink>
                </li>
            ))}
        </ul>
        <h3 className='nav_header'>TW Shows</h3>
        <ul className='menu_list'>
            {NAV?.shows?.map(({ title, path, id }) => (
                <li key={id} className='menu_item'>
                    <NavLink to={path} className='menu_item-link'>{title}</NavLink>
                </li>
            ))}
        </ul>
    </>
)

