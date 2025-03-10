import React, { useContext, useState } from 'react'
import './CarouselText.css'
import arrow_left from '/icons/arrow-left.svg'
import arrow_right from '/icons/arrow-right.svg'
import { ScrollContext } from '../../context/createContext'
import useWidth from '../../hooks/useWidth'

const Img = React.lazy(() => import('../Img/Img'))

const CarouselText = ({ arrayText, slice = false, scroll }) => {
  const { SCROLL } = useContext(ScrollContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animation, setAnimation] = useState(false)
  const width = useWidth()

  const prevSlide = () => {
    setAnimation(true)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arrayText.length - 1 : prevIndex - 1
    )
    SCROLL(scroll)
    setTimeout(() => {
      setAnimation(false)
    }, 600)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === arrayText.length - 1 ? 0 : prevIndex + 1
    )
    setAnimation(true)
    SCROLL(scroll)
    setTimeout(() => {
      setAnimation(false)
    }, 600)
  }
  return (
    <div ref={scroll} className='carousel-text__container'>
      <div
        className={`carousel-text__container-section2 ${
          animation ? 'fadeIn' : ''
        }`}
      >
        <div className='carousel-text-content__'>
          {width >= 546 ? (
            <>
              <h2>{arrayText[currentIndex].title_1}</h2>
              <hr className='carousel__hr' />
              <h3>{arrayText[currentIndex].title_2}</h3>
            </>
          ) : (
            <>
              <h3>{arrayText[currentIndex].title_2}</h3>
              <hr className='carousel__hr' />
            </>
          )}
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
                <Img img={item.img} w='60px' h='60px' ofit='contain' />
                <p>{item.paragraph}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {slice && (
        <div className='carousel-text__buttons'>
          <div className='carousel-text__button left'>
            <Img img={arrow_left} w='30px' h='30px' action={prevSlide} />
          </div>
          <div className='carousel-text__button right'>
            <Img img={arrow_right} w='30px' h='30px' action={nextSlide} />
          </div>
        </div>
      )}
    </div>
  )
}

export default CarouselText
