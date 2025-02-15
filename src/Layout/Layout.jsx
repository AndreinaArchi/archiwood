import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import './Layout.css'
const Layout = () => {
  return (
    <div className='layout__container'>
      <Nav />
      <div className='layout__hr'>
        <hr />
      </div>
      <section className='layout__section'>
        <Outlet />
      </section>
    </div>
  )
}

export default Layout
