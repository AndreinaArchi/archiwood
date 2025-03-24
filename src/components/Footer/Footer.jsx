import React from 'react'
import { useNavigate } from 'react-router-dom'
import useWidth from '../../hooks/useWidth'
import './Footer.css'
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
      <div className='footer__content'>
        <Img
          img={logo}
          w={width <= 936 ? '90px' : '110px'}
          action={() => navigate('/')}
        />
        <p>Powered by Archiwood. All Rights Reserved &#174; {year()}</p>
      </div>
    </div>
  )
}

export default Footer
