import React, { useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ScrollContext } from '../context/createContext'
import './Layout.css'

const Footer = React.lazy(() => import('../components/Footer/Footer'))
const Contact = React.lazy(() => import('../components/Contact/Contact'))
const Nav = React.lazy(() => import('../components/Nav/Nav'))

const Layout = () => {
  const location = useLocation()
  const { showContact, SCROLL, topRef } = useContext(ScrollContext)
  useEffect(() => {
    SCROLL(topRef)
  }, [location])

  return (
    <>
      <Nav />
      {showContact && (
        <section className='section__contact fadeIn'>
          <Contact bannerImg={false} />
        </section>
      )}
      <div ref={topRef} className='layout__section fadeIn'>
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
