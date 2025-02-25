import React from 'react'
import useWidth from '../../hooks/useWidth'
import {
  useSlider,
  useSliderMobile,
  useSliderSection3,
  useSliderSection3Mobile
} from './Slider'
import Button from '../../components/Button/Button'
import { useTranslateSection1, useTranslateSection2, useTranslateSection3, useTranslateSection4 } from './translate'
import './Home.css'

const CarousleText = React.lazy(() => import('../../components/CarouselText/CarouselText'))
const Carousel = React.lazy(() => import('../../components/Carousel/Carousel'))
const Process = React.lazy(() => import('../../components/Process/Process'))

const Home = () => {
  const textContent = useTranslateSection1()
  const textContent3 = useTranslateSection3()
  const width = useWidth()
  const arrayText = useTranslateSection2()
  const arrayText4 = useTranslateSection4()


  return (
    <div>
      <section style={{width:'100%'}}>
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
                fs='14px'
                className='btn-large'
              />
            </div>
          </div>
        </Carousel>
      </section>
      <section>
        <CarousleText arrayText={arrayText} slice={true} />
      </section>
      <section>
        <Carousel
          images={width > 546 ? useSliderSection3 : useSliderSection3Mobile} h={width <= 546 ? '40vh' : '100svh' } >
          <div className='carousel__content-section3'>
            <div>
              <h1>{textContent3.title_1}</h1>
            </div>
            <div>
              {textContent3.text.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className='carousel__content__button'>
              <Button
                value={textContent3.buttonText}
                action={() => alert('Action')}
                bgColor='black'
                txtColor='white'
                p='10px 20px'
                br='20px'
                fs='14px'
                className='btn-large'
              />
            </div>
          </div>
        </Carousel>
      </section>
      <section>
        <Process arrayText={arrayText4} />
      </section>
    </div>
  )
}

export default Home
