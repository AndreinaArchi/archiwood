import React from 'react'
import './Card.css'

const Button = React.lazy(() => import('../Button/Button'))
const Img = React.lazy(() => import('../Img/Img'))

const Card = ({ arrayItems }) => {
  console.log(arrayItems)

  return (
    <div className='card__container'>
      <div>
        <Img img={arrayItems.img} w='100%' />
      </div>
      <div>
        <h2>{arrayItems.title}</h2>
      </div>
      <div>
        <Button
          value={arrayItems.buttonText}
          bgColor='transparent'
          fs='14'
          border='1px solid var(--aw-text-primary)'
          br='0px'
          txtColor='var(--aw-text-primary)'
          p='5px 10px'
        />
      </div>
    </div>
  )
}

export default Card
