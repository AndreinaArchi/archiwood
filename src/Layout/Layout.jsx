import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import './Layout.css'
const Layout = () => {
  return (
    <>
      <Nav />
      <section className='layout__section'>
        <Outlet />
      </section>
    </>
  )
}

export default Layout
