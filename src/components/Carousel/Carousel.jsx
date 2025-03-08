import React, { useContext, useState } from 'react'
import './Carousel.css'
import arrow_left from '/icons/arrow-left.svg'
import arrow_right from '/icons/arrow-right.svg'
import { ScrollContext } from '../../context/createContext'

const Img = React.lazy(() => import('../Img/Img'))

const Carousel = ({ children, images, h = '120svh', scroll }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const [slideDirection, setSlideDirection] = useState('')
  const { SCROLL } = useContext(ScrollContext)

  const prevSlide = () => {
    setPrevIndex(currentIndex)
    setSlideDirection('left')
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
    SCROLL(scroll)
  }

  const nextSlide = () => {
    setPrevIndex(currentIndex)
    setSlideDirection('right')
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
    SCROLL(scroll)

  }

  return (
    <div ref={scroll} className='carousel__container' style={{ height: h }}>
      <div className='carousel__image-wrapper'>
        {prevIndex !== null && (
          <img
            key={`prev-${prevIndex}`}
            src={images[prevIndex].src}
            alt='prev-carousel'
            className={`carousel__image slide-out-${slideDirection}`}
            loading='lazy'
          />
        )}
        <img
          key={`current-${currentIndex}`}
          src={images[currentIndex].src}
          alt='carousel'
          className={`carousel__image slide-in-${slideDirection}`}
          loading='lazy'
        />
      </div>
      {images.length !== 1 && (
        <div className='carousel__buttons'>
          <div className='carousel__button left'>
            <Img img={arrow_left} w='30px' h='30px' action={prevSlide} />
          </div>
          <div className='carousel__button right'>
            <Img img={arrow_right} w='30px' h='30px' action={nextSlide} />
          </div>
        </div>
      )}
      {children}
    </div>
  )
}

export default Carousel
