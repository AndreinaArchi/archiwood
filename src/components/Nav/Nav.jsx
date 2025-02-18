import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '/logo.webp'
import useTranslate from './translate'
import useWidth from '../../hooks/useWidth'

const Locales = React.lazy(() => import('../Locales/Locales'))
const Img = React.lazy(() => import('../Img/Img'))

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const navLinks = useTranslate()
  const width = useWidth()

  return (
    <>
      <nav className='nav__container filter'>
        <div className='nav__content-links'>
          <Img img={logo} w='140px' action={() => alert('action')} />
          {width > 936 && (
            <ul>
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
          <Locales showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      </nav>
{/*       <div className='nav__separate'>
        <hr />
      </div> */}

      <div
        className={`nav__container-menu ${
          showMenu && width <= 936 ? 'active filter' : ''
        }`}
      >
        {width <= 936 && (
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
        )}
      </div>
    </>
  )
}

export default Nav
