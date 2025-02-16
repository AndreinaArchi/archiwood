import { useState } from 'react'
import './Carousel.css'

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
  }

  return (
    <div className='carousel__container'>
      <button className='carousel__button left' onClick={prevSlide}>
        &#60;
      </button>
      <div className='carousel__image-wrapper'>
        {prevIndex !== null && (
          <img
            key={`prev-${prevIndex}`}
            src={images[prevIndex].src}
            alt='prev-carousel'
            className={`carousel__image slide-out-${slideDirection}`}
          />
        )}
        <img
          key={`current-${currentIndex}`}
          src={images[currentIndex].src}
          alt='carousel'
          className={`carousel__image slide-in-${slideDirection}`}
        />
      </div>
      <button className='carousel__button right' onClick={nextSlide}>
        &#62;
      </button>
      {children}
    </div>
  )
}

export default Carousel
