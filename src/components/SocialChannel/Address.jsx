import React from 'react'
import './Address.css'
import phone from '/icons/phone_icon.png'

const Img = React.lazy(() => import('../Img/Img'))

const Address = ({ children}) => {
  const googleAddress = () => {
    window.open('https://maps.app.goo.gl/RBykxe6JGwwssbDk7')
  }
  const addressContext = {
    lineOne: '9594 NW 41st St #109, Doral, FL 33178,',
    lineTwo: 'Miami, Florida 33178'
  }
  return (
    <div className='address__container'>
      <Img img={phone} w='18px' action={() => googleAddress()} ofit='contain' />
      <div>
        <p>{addressContext.lineOne}</p>
        <div className='address__container-visit'>
          <p>{addressContext.lineTwo}</p>
          <a onClick={() => googleAddress()}>{children}</a>
        </div>
      </div>
    </div>
  )
}

export default Address
