import React, { useState } from 'react'
import './Carousel.css'
import arrow_left from '/icons/arrow-left.svg'
import arrow_right from '/icons/arrow-right.svg'

const Img = React.lazy(() => import('../Img/Img'))

const Carousel = ({ children, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const [slideDirection, setSlideDirection] = useState('')

  const prevSlide = () => {
    setPrevIndex(currentIndex)
    setSlideDirection('left')
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setPrevIndex(currentIndex)
    setSlideDirection('right')
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
    console.log(currentIndex)
  }

  return (
    <div className='carousel__container'>
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
      <div className='carousel__buttons'>
        <div className='carousel__button left'>
          <Img img={arrow_left} w='40px' h='40px' action={prevSlide} />
        </div>
        <div className='carousel__button right'>
          <Img img={arrow_right} w='40px' h='40px' action={nextSlide} />
        </div>
      </div>
      {children}
    </div>
  )
}

export default Carousel
