import React, { useContext, useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import useWidth from '../../hooks/useWidth'
import {
  useSlider,
  useSliderMobile,
  useSliderSection3,
  useSliderSection3Mobile,
  /*   useSliderSection5,
  useSliderSection5Mobile, */
  useSliderSection7,
  useSliderSection7Mobile,
  useSliderSection9
  /* useSliderSection9Mobile, */
} from './Slider'
import Button from '../../components/Button/Button'
import {
  useTranslateSection1,
  useTranslateSection2,
  useTranslateSection3,
  useTranslateSection4,
  useTranslateSection5,
  useTranslateSection6,
  useTranslateSection7,
  useTranslateSection8,
  useTranslateSection9
} from './translate'
import './Home.css'
import { ScrollContext } from '../../context/createContext'
import Contact from '../../components/Contact/Contact'

const Card = React.lazy(() => import('../../components/CardProduct/Card'))
const Products = React.lazy(() => import('../../components/Products/Products'))
const Showroom = React.lazy(() => import('../../components/Showroom/Showroom'))
const Carousel = React.lazy(() => import('../../components/Carousel/Carousel'))
const Process = React.lazy(() => import('../../components/Process/Process'))
const CarousleText = React.lazy(() =>
  import('../../components/CarouselText/CarouselText')
)

const Home = () => {
  const [showContact, setShowContact] = useState(false)
  const width = useWidth()
  const navigate = useNavigate()
  const arrayText = useTranslateSection2()
  const textContent = useTranslateSection1()
  const textContent3 = useTranslateSection3()
  const arrayText4 = useTranslateSection4()
  const textContent5 = useTranslateSection5()
  const arrayText6 = useTranslateSection6()
  const arrayText7 = useTranslateSection7()
  const arrayText8 = useTranslateSection8()
  const arrayText9 = useTranslateSection9()
  const {
    section1,
    section2,
    section4,
    purposeRef,
    showroomRef,
    processRef,
    productsRef,
    proyectsRef
  } = useContext(ScrollContext)

  const handleNavigateToNews = () => {
    navigate('/news')
  }

  const handleContactUs = () => {
    setShowContact(!showContact)
  }

  return (
    <Fragment>
      {showContact && (
        <section className='section__contact'>
          <Contact />
        </section>
      )}
      <section style={{ width: '100%' }}>
        <Carousel
          images={width > 546 ? useSlider : useSliderMobile}
          scroll={section1}
        >
          <div className='carousel__content'>
            <div>
              <h1 className='gray'>{textContent.title_1}</h1>
            </div>
            <div>
              {textContent.text.map((text, index) => (
                <p key={index} className='gray'>
                  {text}
                </p>
              ))}
            </div>
            <div>
              <h2 className='gray'>{textContent.title_2}</h2>
            </div>
            <div className='carousel__content__button'>
              <Button
                value={textContent.buttonText}
                action={handleContactUs}
                bgColor='var(--aw-bg-btn)'
                txtColor='var(--aw-text-btn)'
                p='10px 25px'
                br='20px'
                fs={width <= 546 ? '14px' : '18px'}
                className='btn-large'
              />
            </div>
          </div>
        </Carousel>
      </section>
      <section ref={purposeRef}>
        <CarousleText arrayText={arrayText} slice={true} scroll={section2} />
      </section>
      <section>
        <Carousel
          images={width > 546 ? useSliderSection3 : useSliderSection3Mobile}
          h={width <= 936 ? '490px' : '1090px'}
        >
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
                bgColor='var(--aw-bg-btn)'
                txtColor='var(--aw-text-btn)'
                p='10px 25px'
                br='20px'
                fs={width <= 546 ? '14px' : '18px'}
                className='btn-large'
              />
            </div>
          </div>
        </Carousel>
      </section>
      <section ref={processRef}>
        <Process arrayText={arrayText4} scroll={section4} />
      </section>
      {/* <section>
        <Carousel
          images={width > 546 ? useSliderSection5 : useSliderSection5Mobile}
          h={width <= 936 ? '490px' : '1090px'}
        >
          <div className='carousel__content-section5'>
            <div>
              <h1>{textContent5.title_1}</h1>
            </div>
            <div>
              <p>{textContent5.paragraph}</p>
            </div>
            <div className='carousel__content__button'>
              <Button
                value={textContent5.buttonText}
                action={() => alert('Action')}
                bgColor='var(--aw-bg-btn)'
                txtColor='var(--aw-text-btn)'
                p='10px 25px'
                br='20px'
                fs='14px'
                className='btn-large'
              />
            </div>
          </div>
        </Carousel>
      </section> */}
      <section ref={showroomRef}>
        <Showroom arrayText={arrayText6}>
          <div className='carousel__content__button'>
            <Button
              value={textContent5.buttonText}
              action={() => alert('Action')}
              bgColor='var(--aw-bg-btn)'
              txtColor='var(--aw-text-btn)'
              p='10px 25px'
              br='20px'
              fs={width <= 546 ? '14px' : '18px'}
              className='btn-large'
            />
          </div>
        </Showroom>
      </section>
      <section>
        <Carousel
          images={width > 546 ? useSliderSection7 : useSliderSection7Mobile}
          h={width <= 546 ? '950px' : '1050px'}
        >
          {arrayText7.items?.map((item) => (
            <div
              key={item.id}
              className='carousel__content-section7'
              style={{ height: width <= 546 ? '690px' : '790px' }}
            >
              <div>
                <h2>{item.title}</h2>
              </div>
              <div className='carousel__content__button'>
                <Button
                  value={item.buttonText}
                  action={handleNavigateToNews}
                  bgColor='var(--aw-bg-btn)'
                  txtColor='var(--aw-text-btn)'
                  p='10px 25px'
                  br='20px'
                  fs={width <= 546 ? '14px' : '18px'}
                  className='btn-large'
                />
              </div>
              <div className='carousel__content-p-section7'>
                <p>{item.text_1}</p>
                <p>{item.text_2}</p>
                <p>{item.text_3}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
      <section ref={productsRef}>
        <Products arrayText={arrayText8}>
          <div className='products__array-cards'>
            {arrayText8.items?.map((item) => (
              <Card key={item.id} arrayItems={item} />
            ))}
          </div>
          <div className='products__content-action margin-top'>
            <Button
              value={arrayText8.buttonText}
              action={() => alert('Action')}
              bgColor='var(--aw-bg-btn)'
              txtColor='var(--aw-text-btn)'
              p='10px 25px'
              br='20px'
              fs={width <= 546 ? '14px' : '18px'}
              className='btn-large'
            />
            <h3>{arrayText8.subTitle3}</h3>
          </div>
        </Products>
      </section>

      <section ref={proyectsRef}>
        <Carousel
          images={useSliderSection9}
          h={width <= 546 ? '950px' : '1050px'}
        >
          <div
            className='carousel__content-section-proyects'
            style={{ height: width <= 546 ? '690px' : '790px' }}
          >
            <div>
              <h2>{arrayText9.title}</h2>
            </div>
            <div>
              <h3>{arrayText9.subTitle}</h3>
            </div>
            <div className='carousel__content-section-proyects-p'>
              <p>{arrayText9.text}</p>
            </div>
          </div>
        </Carousel>
      </section>
    </Fragment>
  )
}

export default Home
