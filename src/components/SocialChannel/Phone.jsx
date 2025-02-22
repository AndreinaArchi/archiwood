import React from 'react'
import './Phone.css'
import phone from '/icons/phone_icon.png'

const Img = React.lazy(() => import('../Img/Img'))

const Phone = () => {
  const callMe = () => {
    window.open('tel:+17864586859')
  }
  return (
    <div className='phone__container'>
      <Img img={phone} w='18px' action={() => callMe()} ofit='contain' />
      <a onClick={() => callMe()}>(1)786.458.6859</a>
    </div>
  )
}

export default Phone
