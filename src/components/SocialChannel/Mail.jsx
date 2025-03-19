import React from 'react'
import './Mail.css'
import position from '/icons/address.png'

const Img = React.lazy(() => import('../Img/Img'))

const Mail = () => {
  const callMe = () => {
    window.open('tel:+17864586859')
  }
  return (
    <div className='mail__container'>
      <Img img={position} w='18px' action={() => callMe()} ofit='contain' />
      <a onClick={() => callMe()}>(1)786.458.6859</a>
    </div>
  )
}

export default Mail
