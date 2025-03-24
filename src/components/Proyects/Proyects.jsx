import React, { useState, useRef, useEffect, Suspense } from 'react'
import './Proyects.css'
import arrow_left from '/icons/arrow-left.svg'
import arrow_right from '/icons/arrow-right.svg'

const Img = React.lazy(() => import('../Img/Img'))

const Proyects = ({ arrayImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const thumbnailsRef = useRef(null)

  useEffect(() => {
    if (thumbnailsRef.current) {
      const selectedThumbnail = thumbnailsRef.current.children[currentIndex]
      thumbnailsRef.current.scrollTo({
        left:
          selectedThumbnail.offsetLeft -
          thumbnailsRef.current.offsetWidth / 2 +
          selectedThumbnail.offsetWidth / 2,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arrayImage.length)
  }

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + arrayImage.length) % arrayImage.length
    )
  }

  return (
    <div className='proyects-container'>
      <div className='main-image'>
        <Suspense fallback={<div>Cargando...</div>}>
          <Img
            img={arrayImage[currentIndex].src}
            alt={arrayImage[currentIndex].alt}
            w='100%'
          />
        </Suspense>
      </div>

      {/* Miniaturas */}
      <div className='proyects__thumbnail-container' ref={thumbnailsRef}>
        {arrayImage.map((img, index) => (
          <div
            key={index}
            className={`proyects__thumbnail ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Suspense fallback={<div>Cargando...</div>}>
              <div className='proyects__img-content'>
                <Img img={img.src} alt={img.alt} w='90px' />
              </div>
            </Suspense>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <div className='proyects__content-btn-actions'>
        <Img
          img={arrow_left}
          w='30px'
          h='30px'
          action={prevImage}
          alt='prev'
        />
        <Img
          img={arrow_right}
          w='30px'
          h='30px'
          action={nextImage}
          alt='next'
        />
      </div>
    </div>
  )
}

export default Proyects
