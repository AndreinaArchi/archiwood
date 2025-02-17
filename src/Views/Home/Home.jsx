import React from 'react'
import { useSlider, useSliderMobile } from './Slider'
import Button from '../../components/Button/Button'
import useTranslate from './translate'
import './Home.css'
import useWidth from '../../hooks/useWidth'

const Carousel = React.lazy(() => import('../../components/Carousel/Carousel'))

const Home = () => {
  const textContent = useTranslate()
  const width = useWidth()

  return (
    <div>
      <Carousel images={width > 546 ? useSlider : useSliderMobile}>
        <div className='carousel__content'>
          <div>
            <h1>{textContent.title_1}</h1>
          </div>
          <div>
            {textContent.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div>
            <h2>{textContent.title_2}</h2>
          </div>
          <div className='carousel__content__button'>
            <Button
              value={textContent.buttonText}
              action={() => alert('Action')}
              bgColor='black'
              txtColor='white'
              p='10px 20px'
              br='20px'
              fs='16px'
              className='btn-large'
            />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Home
