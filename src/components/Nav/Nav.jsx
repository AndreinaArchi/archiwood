import React, { useEffect, useState, useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import useWidth from '../../hooks/useWidth'
import { ScrollContext } from '../../context/createContext'
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
  const location = useLocation()
  const {
    SCROLL,
    purposeRef,
    showroomRef,
    processRef,
    productsRef,
    proyectsRef,
    contactRef
  } = useContext(ScrollContext)

  const scrollToSection = (section) => {
    if (location.pathname !== '/') {
      navigate('/')
    }
    setTimeout(() => {
      if (section === 'purpose' && purposeRef.current) {
        SCROLL(purposeRef)
        toggleSubMenu()
      } else if (section === 'showroom' && showroomRef.current) {
        SCROLL(showroomRef)
        toggleSubMenu()
      } else if (section === 'process' && processRef.current) {
        SCROLL(processRef)
        toggleSubMenu()
      } else if (section === 'products' && productsRef.current) {
        SCROLL(productsRef)
        toggleSubMenu()
      } else if (section === 'proyects' && proyectsRef.current) {
        SCROLL(proyectsRef)
        toggleSubMenu()
      } else if (section === 'contact' && contactRef.current) {
        SCROLL(contactRef)
        toggleSubMenu()
      }
    }, 400)
  }

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
                              {subItem.ref ? (
                                <button
                                  className={`nav__submenu `}
                                  onClick={() => scrollToSection(subItem.ref)}
                                >
                                  {subItem.name}
                                </button>
                              ) : (
                                <NavLink
                                  className=''
                                  to={subItem.path}
                                  onClick={toggleSubMenu}
                                >
                                  {subItem.name}
                                </NavLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : link.ref ? (
                    <button
                      className={`nav__submenu `}
                      onClick={() => scrollToSection(link.ref)}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        ` ${isActive ? 'nav__link-active' : ''}`
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
              <SocialChannel borderRight={true} />
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
                        className={`nav__submenu `}
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
                              className=''
                              onClick={() => {
                                setOpenSubMenu(false)
                                setShowMenu(false)
                              }}
                            >
                              {'·'}
                              {subItem.ref ? (
                                <button
                                  className={`nav__submenu `}
                                  onClick={() => scrollToSection(subItem.ref)}
                                >
                                  {subItem.name}
                                </button>
                              ) : (
                                <NavLink to={subItem.path} className=''>
                                  {subItem.name}
                                </NavLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : link.ref ? (
                    <button
                      className={`nav__submenu`}
                      onClick={() => {
                        scrollToSection(link.ref)
                        setShowMenu(false)
                      }}
                    >
                      {link.name}
                    </button>
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
              <SocialChannel borderRight={true} />
              <Phone />
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Nav
