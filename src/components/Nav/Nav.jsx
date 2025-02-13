import { NavLink } from 'react-router-dom'
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
    </nav>
  )
}

export default Nav
