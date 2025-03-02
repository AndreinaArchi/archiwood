import { useState } from 'react'
import './Showroom.css'
import show from '/icons/show.png'
import Img from '../Img/Img'

const Showroom = ({ children, arrayText }) => {
  const [openItems, setOpenItems] = useState({})
  const [selectedId, setSelectedId] = useState(arrayText.items[0]?.id)

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      [id]: !prev[id]
    }))
    setSelectedId(id)
  }

  const selectedItem =
    arrayText.items.find((item) => item.id === selectedId) || arrayText.items[0]

  return (
    <div className='showroom__container'>
      <div
        className='showroom__content-left image-fade'
        style={{
          backgroundImage: selectedItem ? `url(${selectedItem.img})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: selectedItem ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <h2>{selectedItem.principalTitle}</h2>
      </div>
      <div className='showroom__content-right'>
        <div className='showroom__content-options'>
          {arrayText.items?.map((item) => (
            <div key={item.id} className='showroom__item'>
              <div
                className='showroom__content-title'
                onClick={() => toggleItem(item.id)}
              >
                <Img
                  img={show}
                  w='16px'
                  h='16px'
                  r={openItems[item.id] ? 180 : 0}
                />
                <h2 className={openItems[item.id] ? 'active-title' : ''}>
                  {item.title}
                </h2>
              </div>
              <div
                className={`showroom__description ${
                  openItems[item.id] ? 'show' : 'hide'
                }`}
              >
                <p>{item.description_1}</p>
                {item.description_2 && <p>{item.description_2}</p>}
              </div>
            </div>
          ))}
        </div>
        {children}
      </div>
    </div>
  )
}

export default Showroom
