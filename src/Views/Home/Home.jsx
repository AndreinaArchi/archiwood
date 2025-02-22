import React from 'react'
import useWidth from '../../hooks/useWidth'
import {
  useSlider,
  useSliderMobile,
  useSliderSection3,
  useSliderSection3Mobile
} from './Slider'
import Button from '../../components/Button/Button'
import { useTranslateSection1, useTranslateSection3 } from './translate'
import './Home.css'
import purpose1 from '/icons/purpose_objetivos1.png'
import purpose2 from '/icons/purpose_objetivos2.png'
import purpose3 from '/icons/purpose_objetivos3.png'
import purpose4 from '/icons/purpose_objetivos4.png'

const CarousleText = React.lazy(() => import('../../components/CarouselText/CarouselText'))
const Carousel = React.lazy(() => import('../../components/Carousel/Carousel'))

const Home = () => {
  const textContent = useTranslateSection1()
  const textContent3 = useTranslateSection3()
  const width = useWidth()

  const arrayText = [
    {
      title_1: 'Our Purpose',
      title_2: 'Misión',
      paragraph:
        'Nuestra empresa, ubicada en Miami, se especializa en la fabricación de carpintería personalizada, tanto local como importada desde Europa. Ofrecemos soluciones a medida que combinan calidad, diseño y funcionalidad, adaptadas a las necesidades de arquitectos, diseñadores, constructores y el público en general. Además, proporcionamos accesorios de carpintería y apoyo técnico especializado en dibujo y renderizado, asegurando la gestión eficiente de cada proyecto.'
    },
    {
      title_1: 'Our Purpose',
      title_2: 'Visión',
      paragraph:
        'Convertirnos en la empresa líder en soluciones de carpintería, reconocida por la excelencia de nuestros productos y servicios. Queremos ser el socio confiable de arquitectos, diseñadores y constructores, ofreciendo innovación, calidad y eficiencia, tanto con nuestra carpintería local en Miami como con nuestra línea europea.'
    },
    {
      title_1: 'Our Purpose',
      title_2: 'Objetivos',
      paragraph:'',
      items: [
        {
          img:purpose1,
          paragraph:'Proporcionar productos de carpintería personalizados y de alta calidad, tanto locales como importados, que se adapten a las necesidades de nuestros clientes.'
        },
        {
          img:purpose2,
          paragraph:'Ofrecer un servicio integral que incluya asesoría técnica, diseño y renderizados, optimizando la gestión de proyectos.'
        },
        {
          img:purpose3,
          paragraph:'Mantener un compromiso constante con la innovación y sostenibilidad en todos nuestros productos y procesos.'
        },
        {
          img:purpose4,
          paragraph:'Brindar soluciones creativas y funcionales que contribuyan al éxito de cada proyecto.'
        },
      ]
    }
  ]

  return (
    <div>
      <section>
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
        <CarousleText arrayText={arrayText} />
      </section>
      <section>
        <Carousel
          images={width > 546 ? useSliderSection3 : useSliderSection3Mobile}
        h='70svh' >
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
    </div>
  )
}

export default Home
