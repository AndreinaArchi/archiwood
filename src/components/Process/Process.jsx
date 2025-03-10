import React, { useContext, useState } from 'react'
import useWidth from '../../hooks/useWidth'
import { ScrollContext } from '../../context/createContext'
import './Process.css'
import one from '/images/1.png'
import two from '/images/2.png'
import three from '/images/3.png'
import four from '/images/4.png'
import five from '/images/5.png'
import six from '/images/6.png'
import seven from '/images/7.png'
import useTranslate from './translate'

const Img = React.lazy(() => import('../Img/Img'))

const Process = ({ arrayText, scroll }) => {
  const { SCROLL } = useContext(ScrollContext)
  const [showAll, setShowAll] = useState(false)
  const btn_text = useTranslate()
  const width = useWidth
  const arrayImg = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: seven
  }

  const visibleOptions = showAll
    ? arrayText.options
    : arrayText.options.slice(0, 3)

  return (
    <div ref={scroll} className='process__container'>
      <div className='process__content-title'>
        <h2>{arrayText.title}</h2>
      </div>
      <div className='process__content-description'>
        <p className='line-height'>{arrayText.description}</p>
      </div>
      <div className='process__container-article'>
        {visibleOptions.map((item, index) => {
          const imgSrc = arrayImg[item.id]
          return (
            <article key={index} className='process__content-article fadeIn'>
              {imgSrc && (
                <Img
                  img={imgSrc}
                  alt={`Image ${item.title}`}
                  w={width >= 936 ? '80px' : '40px'}
                  h={width >= 936 ? '80px' : '40px'}
                />
              )}
              <h3 className='gray'>{item.title}</h3>
              <p className='line-height'>{item.description}</p>
            </article>
          )
        })}
      </div>
      {arrayText.options.length > 3 && (
        <button
          onClick={() => {
            setShowAll(!showAll)
            SCROLL(scroll)
          }}
          className='process__btn-action'
        >
          {showAll ? btn_text.button_off : btn_text.button_on}
        </button>
      )}
    </div>
  )
}

export default Process
