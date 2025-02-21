import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import useWidth from '../../hooks/useWidth'
import useTranslate from './translate'
import './Nav.css'
import logo from '/logo_01.png'
import Phone from '../SocialChannel/Phone'

const ShowNav = React.lazy(() => import('./ShowNav'))
const SocialChannel = React.lazy(() => import('../SocialChannel/SocialChannel'))
const Locales = React.lazy(() => import('../Locales/Locales'))
const Img = React.lazy(() => import('../Img/Img'))

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [hasFilter, setHasFilter] = useState(false)
  const navLinks = useTranslate()
  const width = useWidth()

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setHasFilter(currentScrollY >= 30)

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [width])

  return (
    <>
      <nav
        className={`nav__container ${isHidden && !showMenu ? 'nav--hidden' : ''} ${
          hasFilter ? 'filter' : ''
        }`}
      >
        <div className='nav__content-links'>
          <Img
            img={logo}
            w={width <= 936 ? '90px' : '110px'}
            action={() => alert('action')}
          />
          {width > 936 && (
            <ul className={width > 936 ? 'nav__content-ul-desktop' : ''}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${isActive ? 'nav__link-active' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='nav__content-locales'>
          <Locales />
          {width <= 936 && (
            <ShowNav showMenu={showMenu} setShowMenu={setShowMenu} />
          )}
          {width > 936 && (
            <>
              <SocialChannel />
              <Phone />
            </>
          )}
        </div>
      </nav>
      <div
        className={`nav__container-menu ${
          showMenu && width <= 936 ? 'active' : ''
        }`}
        onClick={() => setShowMenu(false)}
      >
        {width <= 936 && (
          <div className='nav__content-menu'>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${isActive ? 'nav__link-active' : ''}`
                    }
                    onClick={() => setShowMenu(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className='nav__content-menu-social'>
              <SocialChannel />
              <Phone />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Nav
