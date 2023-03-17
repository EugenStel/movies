import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Menu } from '../menu/menu'
import { MobileMenu } from '../mobile-menu/mobile-menu'
import './layout-main-page.scss'

export const LayoutMainPage = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div className="layout">
            <div className='navigation'>
                <Menu pathname={pathname} />
            </div>
            <Outlet />
            <MobileMenu pathname={pathname} />
        </div>
    )
}