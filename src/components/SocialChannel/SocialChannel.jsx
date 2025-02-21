import React from 'react'
import './SocialChannel.css'
import ig from '/icons/ig_icon.png'
import tiktok from '/icons/tiktok_icon.png'
import pinterest from '/icons/pinterest_icon.png'

const Img = React.lazy(() => import('../Img/Img'))

const SocialChannel = () => {
  return (
    <div className='social__container'>
      <Img img={ig} w='18px' ofit='contain' />
      <Img img={tiktok} w='18px' ofit='contain' />
      <Img img={pinterest} w='18px' ofit='contain' />
    </div>
  )
}

export default SocialChannel
