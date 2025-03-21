import React from 'react'
import useWidth from '../../hooks/useWidth'
import { useTranlateNews } from './translateNews'
import './News.css'
import SocialChannel from '../../components/SocialChannel/SocialChannel'
import Button from '../../components/Button/Button'

const Img = React.lazy(() => import('../../components/Img/Img'))

const News = () => {
  const width = useWidth()
  const { newsT } = useTranlateNews()
  console.log(newsT)

  return (
    <div className='product__container fadeIn'>
      <div className='product__hero-content'>
        <Img img={newsT.banner} w='100%' h={width > 599 ? '590px' : '200px'} />
        <h1>{newsT.texts.title}</h1>
      </div>
      <div className='product__content-news'>
        <div>
          <h1>{newsT.texts?.welcomeMessage}</h1>
        </div>
        <div className='product__sections'>
          <div className='product__section-news'>
            <div>
              {newsT.news?.map((item) => (
                <div key={item.id} className='product__section-news-content'>
                  {item.video && (
                    <iframe
                      width={width < 1581 ? '100%' : '80%'}
                      height='500px'
                      src={item.video}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      referrerPolicy='strict-origin-when-cross-origin'
                      allowfullscreen
                    ></iframe>
                  )}
                  {item.image && <Img img={item.image} w='100%' h='auto' />}
                  <div className='product__section-news-title'>
                    <h2>{item.title || 'Título no disponible'}</h2>
                    <p>{`${item.date || 'Fecha no disponible'} | ${
                      item.category || 'Categoría no disponible'
                    }`}</p>
                  </div>

                  <article>
                    <p style={{ whiteSpace: 'pre-line' }}>
                      {item.content || 'Contenido no disponible.'}
                    </p>
                  </article>
                  <div>
                    <SocialChannel w='28px' />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='product__section-categories'>
            <div>
              {newsT.texts?.subTitle && <h3>{newsT.texts.subTitle}</h3>}
              <hr />
            </div>
            <div className='product__section-categories-content'>
              {newsT.categories?.map((item) => (
                <div key={item.id}>
                  <Button
                    value={item.name || 'Categoría desconocida'}
                    p='5px 10px'
                    bgColor='transparent'
                    txtColor='var(--aw-text-primary)'
                    fs='18px'
                  />
                </div>
              ))}
            </div>
            <div>
              <SocialChannel w='24px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
