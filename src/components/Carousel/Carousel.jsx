import { useState } from 'react'
import './Carousel.css'
import Button from '../Button/Button'

const Carousel = ({ images }) => {
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
      <div className='carousel__content'>
        <div className='carousel__title'>
          <h1>¡Especialistas en Carpintería personalizada!</h1>
        </div>
        <div className='carousel__text'>
          <p>Ofrecemos soluciones a medida con calidad</p>
          <p>y diseño para transformar tu hogar</p>
        </div>
        <div className='carousel__title'>
          <h2>¡Haz tu proyecto realidad!</h2>
        </div>
        <div>
          <Button
            value='Descubre nuestros servicios'
            action={() => alert('Action')}
            bgColor='black'
            txtColor='white'
            p='5px 20px'
            br='20px'
            fs='16px'
            className='btn-large'
          />
        </div>
      </div>
    </div>
  )
}

export default Carousel
