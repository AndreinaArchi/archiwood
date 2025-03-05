import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useWidth from '../../hooks/useWidth'
import useTranslate from './translate'
import './Nav.css'
import logo from '/logo_01.png'
import show from '/icons/show.png'

const ShowNav = React.lazy(() => import('./ShowNav'))
const SocialChannel = React.lazy(() => import('../SocialChannel/SocialChannel'))
const Locales = React.lazy(() => import('../Locales/Locales'))
const Img = React.lazy(() => import('../Img/Img'))
const Phone = React.lazy(() => import('../SocialChannel/Phone'))

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [hasFilter, setHasFilter] = useState(false)
  const navLinks = useTranslate()
  const navigate = useNavigate()
  const width = useWidth()

  const toggleSubMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? false : id)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (
        !openSubMenu &&
        currentScrollY > lastScrollY &&
        currentScrollY > 100
      ) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setHasFilter(currentScrollY >= 30)

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [width, openSubMenu])

  return (
    <>
      <nav
        className={`nav__container ${
          isHidden && !showMenu ? 'nav--hidden' : ''
        } ${hasFilter ? 'filter' : ''}`}
      >
        <div className='nav__content-links'>
          <Img
            img={logo}
            w={width <= 936 ? '90px' : '110px'}
            action={() => navigate('/')}
          />
          {width > 936 && (
            <ul className={width > 936 ? 'nav__content-ul-desktop' : ''}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.options ? (
                    <>
                      <button
                        className={`nav__submenu`}
                        onClick={() => toggleSubMenu(link.id)}
                      >
                        {link.name}{' '}
                        <Img
                          img={show}
                          w='9px'
                          h='9px'
                          r={openSubMenu === link.id ? 180 : 0}
                        />
                      </button>
                      {openSubMenu === link.id && (
                        <ul className='nav__content-submenu fadeIn'>
                          {link.options.map((subItem, index) => (
                            <li key={subItem.id}>
                              {index !== 0 && '·'}
                              <NavLink to={subItem.ref}>{subItem.name}</NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `${isActive ? 'nav__link-active' : ''}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
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

      {/**NAV MOBILE */}
      <nav
        className={`nav__container-menu ${
          showMenu && width <= 936 ? 'active' : ''
        }`}
      >
        {width <= 936 && (
          <div className='nav__content-menu'>
            <ul className={width < 936 ? 'nav__content-ul-mobile' : ''}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  {link.options ? (
                    <>
                      <button
                        className={`nav__submenu`}
                        onClick={() => toggleSubMenu(link.id)}
                      >
                        {link.name}{' '}
                        <Img
                          img={show}
                          w='9px'
                          h='9px'
                          r={openSubMenu === link.id ? 180 : 0}
                        />
                      </button>
                      {openSubMenu === link.id && (
                        <ul className='nav__content-submenuMobile fadeIn'>
                          {link.options.map((subItem) => (
                            <li
                              key={subItem.id}
                              onClick={() => {
                                setOpenSubMenu(false)
                                setShowMenu(false)
                              }}
                            >
                              {'·'}
                              <NavLink to={subItem.ref}>{subItem.name}</NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink
                      onClick={() => {
                        setOpenSubMenu(false)
                        setShowMenu(false)
                      }}
                      to={link.path}
                      className={({ isActive }) =>
                        `${isActive ? 'nav__link-active' : ''}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className='nav__content-menu-social'>
              <SocialChannel />
              <Phone />
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Nav
