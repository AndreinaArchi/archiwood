import { NavLink } from 'react-router-dom'
import Locales from '../Locales/Locales'
import Img from '../Img/Img'
import logo from '/logo.webp'
import './Nav.css'

const Nav = () => {
  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre Nosotros', path: '/about-us' },
    { name: 'Productos', path: '/products' },
    { name: 'Studios', path: '/studies' },
    { name: 'Contacto', path: '/contact' }
  ]

  return (
    <nav className='nav__container'>
      <div className='nav__content-links'>
        <Img img={logo} w='150px' action={() => alert('action')} />
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
  )
}

export default Nav
