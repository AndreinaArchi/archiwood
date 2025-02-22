import React, { useState } from 'react'
import './CarouselText.css'
import arrow_left from '/icons/arrow-left.svg'
import arrow_right from '/icons/arrow-right.svg'

const Img = React.lazy(() => import('../Img/Img'))

const CarouselText = ({ arrayText }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animation, setAnimation] = useState('')
  const prevSlide = () => {
    if (currentIndex > 0) {
      setAnimation('slideOutToRight')
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1)
        setAnimation('slideInFromLeft')
      }, 300)
    }
  }

  const nextSlide = () => {
    if (currentIndex < arrayText.length - 1) {
      setAnimation('slideOutToLeft')
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1)
        setAnimation('slideInFromRight')
      }, 300)
    }
  }
  return (
    <div className='carousel-text__container'>
      <div className='carousel-text__container-section2 fadeIn'>
        <div className='carousel-text-content__'>
          <h2>{arrayText[currentIndex].title_1}</h2>
          <hr />
          <h3>{arrayText[currentIndex].title_2}</h3>
        </div>
        {arrayText[currentIndex].paragraph && (
          <div className='carousel-text-content-p'>
            <p>{arrayText[currentIndex].paragraph}</p>
          </div>
        )}
        {arrayText[currentIndex].items && (
          <div className='carousel-text-content-img'>
            {arrayText[currentIndex].items?.map((item, index) => (
              <div key={index} className='carousel-text-container-img'>
                <Img img={item.img} w='60px' h='60px' ofit="contain" />
                <p>{item.paragraph}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='carousel-text__buttons'>
        <div className='carousel-text__button left'>
          <Img img={arrow_left} w='30px' h='30px' action={prevSlide} />
        </div>
        <div className='carousel-text__button right'>
          <Img img={arrow_right} w='30px' h='30px' action={nextSlide} />
        </div>
      </div>
    </div>
  )
}

export default CarouselText
