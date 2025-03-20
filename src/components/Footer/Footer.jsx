import React from 'react'
import { useNavigate } from 'react-router-dom'
import useWidth from '../../hooks/useWidth'
import './Footer.css'
import banner from '/images/footer.png'
import logo from '/logo_01.png'

const Img = React.lazy(() => import('../Img/Img'))

const Footer = () => {
  const year = () => {
    const date = new Date()
    const year = date.getFullYear()
    if (year === 2025) {
      return year
    } else {
      return `2025 - ${year}`
    }
  }

  const width = useWidth()
  const navigate = useNavigate()
  return (
    <div className='footer__container'>
      <div className='footer__content-banner'>
        <Img img={banner} w='100%' h='100%' />
      </div>
      <div className='footer__content'>
        <p>All Rights Reserved &#174; {year()}</p>
        <p>Powered by</p>
        <Img
          img={logo}
          w={width <= 936 ? '90px' : '110px'}
          action={() => navigate('/')}
        />
      </div>
    </div>
  )
}

export default Footer
