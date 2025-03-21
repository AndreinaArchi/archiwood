import React from 'react'
import './SocialChannel.css'
import ig from '/icons/ig_icon.png'
import tiktok from '/icons/tiktok_icon.png'
import pinterest from '/icons/pinterest_icon.png'

const Img = React.lazy(() => import('../Img/Img'))

const SocialChannel = ({ borderRight = false, w='18px' }) => {
  const socialIg = () => {
    window.open('https://www.instagram.com/archiwood.usa')
  }
  const socialTikTok = () => {
    window.open('https://www.tiktok.com/@archiwood.usa')
  }
  const socialPinterest = () => {
    window.open('https://pinterest.com/archiwood_usa/')
  }
  return (
    <div
      className='social__container'
      style={{ borderRight: borderRight && '1px solid var(--aw-bg-btn)' }}
    >
      <Img img={ig} w={w} ofit='contain' action={() => socialIg()} />
      <Img img={tiktok} w={w} ofit='contain' action={() => socialTikTok()} />
      <Img
        img={pinterest}
        w={w}
        ofit='contain'
        action={() => socialPinterest()}
      />
    </div>
  )
}

export default SocialChannel
