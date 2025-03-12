import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollContext } from '../context/createContext'
import './Layout.css'

const Nav = React.lazy(() => import('../components/Nav/Nav'))

const Layout = () => {
  const location = useLocation()
  const { SCROLL, topRef } = useContext(ScrollContext)
  useEffect(() => {
    SCROLL(topRef)
  }, [location])

  return (
    <>
      <Nav />
      <div ref={topRef} className='layout__section fadeIn'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
