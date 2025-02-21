import React from 'react'
import './Phone.css'
import phone from '/icons/phone_icon.png'

const Img = React.lazy(() => import('../Img/Img'))

const Phone = () => {
  const callMe = () => {
    window.open('tel:+380722650507')
  }
  return (
    <div className='phone__container'>
      <Img img={phone} w='18px' action={() => callMe()} ofit='contain' />
      <a onClick={() => callMe()}>722.65.05.07</a>
    </div>
  )
}

export default Phone
