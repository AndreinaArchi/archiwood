import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'
import logo from '/logo.webp'
import useTranslate  from './translate'

const Locales = React.lazy(() => import('../Locales/Locales'))
const Img = React.lazy(() => import('../Img/Img'))

const Nav = () => {
  const navLinks = useTranslate ()

  return (
    <>
      <nav className='nav__container filter'>
        <div className='nav__content-links'>
          <Img img={logo} w='140px' action={() => alert('action')} />
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
        </div>
        <div className='nav__content-locales'>
          <Locales />
        </div>
      </nav>
      <div className='nav__separate'>
        <hr />
      </div>
    </>
  )
}

export default Nav
