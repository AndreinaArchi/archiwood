import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'

const Button = React.lazy(() => import('../Button/Button'))
const Img = React.lazy(() => import('../Img/Img'))

const Card = ({ arrayItems }) => {
  const navigate = useNavigate()

  const handleOpenProduct = (item) => {
    const formatName = item.title
      .toLowerCase()
      .replace(/[\s]+/g, '-')
      .replace(/[^\w-]+/g, '')

    navigate(`/${formatName}/${item.id}`)
  }

  return (
    <div className='card__container'>
      <div>
        <Img img={arrayItems.img} w='100%' />
      </div>
      <div>
        <h2>{arrayItems.title}</h2>
      </div>
      {arrayItems.items[0].title !== '' && (
        <div>
          <Button
            value={arrayItems.buttonText}
            bgColor='transparent'
            fs='14'
            border='1px solid var(--aw-text-primary)'
            br='0px'
            txtColor='var(--aw-text-primary)'
            p='5px 10px'
            action={() => handleOpenProduct(arrayItems)}
          />
        </div>
      )}
    </div>
  )
}

export default Card
