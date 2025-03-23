import React, { useContext, useEffect, useRef, useState } from 'react'
import useWidth from '../../hooks/useWidth'
import { useTranlateNews } from './translateNews'
import './News.css'
import { ScrollContext } from '../../context/createContext'

const SocialChannel = React.lazy(() =>
  import('../../components/SocialChannel/SocialChannel')
)
const Button = React.lazy(() => import('../../components/Button/Button'))
const Img = React.lazy(() => import('../../components/Img/Img'))

const News = () => {
  const { SCROLL } = useContext(ScrollContext)
  const width = useWidth()
  const { newsT } = useTranlateNews()
  const prevRef = useRef(null)

  const [availableCategories, setAvailableCategories] = useState([])
  const [recentNews, setRecentNews] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const parseDate = (dateString) => {
    const months = {
      Enero: 0,
      Febrero: 1,
      Marzo: 2,
      Abril: 3,
      Mayo: 4,
      Junio: 5,
      Julio: 6,
      Agosto: 7,
      Septiembre: 8,
      Octubre: 9,
      Noviembre: 10,
      Diciembre: 11
    }
    const parts = dateString.split(' ')
    if (parts.length === 3) {
      const month = months[parts[0]]
      const day = parseInt(parts[1].replace(',', ''), 10)
      const year = parseInt(parts[2], 10)
      return new Date(year, month, day)
    }
    return null
  }

  useEffect(() => {
    if (newsT?.news && newsT?.categories) {
      const filteredCategories = newsT.categories.filter((category) =>
        newsT.news.some((news) => news.categoryId === category.id)
      )
      const latestNews =
        newsT.news
          .filter((news) => news.date)
          .map((news) => ({ ...news, parsedDate: parseDate(news.date) }))
          .filter((news) => news.parsedDate)
          .sort((a, b) => b.parsedDate - a.parsedDate)[0] || null

      setAvailableCategories(filteredCategories)
      setRecentNews(latestNews)
    }
  }, [])

  return (
    <section className='news__container fadeIn'>
      <div className='news__hero-content'>
        <Img img={newsT.banner} w='100%' h={width > 599 ? '590px' : '200px'} />
        <h1>{newsT.texts.title}</h1>
      </div>
      <div className='news__content-news'>
        <div>
          <h1>{newsT.texts?.welcomeMessage}</h1>
        </div>
        <div className='news__sections'>
          <div className='news__section-news'>
            <div ref={prevRef}>
              {newsT.news?.length > 0 && (
                <>
                  <div
                    key={newsT.news[currentIndex].id}
                    className='news__section-news-content'
                  >
                    {newsT.news[currentIndex].video && (
                      <iframe
                        width='100%'
                        height='500px'
                        src={newsT.news[currentIndex].video}
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                      ></iframe>
                    )}
                    {newsT.news[currentIndex].image && (
                      <Img
                        img={newsT.news[currentIndex].image}
                        w='100%'
                        h='auto'
                      />
                    )}
                    <div className='news__section-news-title'>
                      <h2>
                        {newsT.news[currentIndex].title ||
                          'Título no disponible'}
                      </h2>
                      <p>{`${
                        newsT.news[currentIndex].date || 'Fecha no disponible'
                      } | ${
                        newsT.news[currentIndex].category ||
                        'Categoría no disponible'
                      }`}</p>
                    </div>
                    <article>
                      <p style={{ whiteSpace: 'pre-line' }}>
                        {newsT.news[currentIndex].content ||
                          'Contenido no disponible.'}
                      </p>
                    </article>
                    {/* Lista de noticias */}
                    {newsT.news?.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <hr className='separete__news' />
                        <div className='news__list-news-content'>
                          {item.video && (
                            <iframe
                              width='250px'
                              height='170px'
                              src={item.video}
                              title='YouTube video player'
                              frameBorder='0'
                              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                              referrerPolicy='strict-origin-when-cross-origin'
                              allowFullScreen
                            ></iframe>
                          )}
                          {item.image && (
                            <Img img={item.image} w='250px' h='170px' />
                          )}
                          <div className='news__list-news-title'>
                            <p>
                              {item.date} | {item.category}
                            </p>
                            <h3>{item.title || 'Título no disponible'}</h3>
                            <article>
                              <p>
                                {item.content.slice(0, 120) ||
                                  'Contenido no disponible.'}
                                ...
                              </p>
                            </article>
                            <Button
                              value={newsT?.texts?.btnText || 'Ver más'}
                              txtColor='var(--aw-text-btn)'
                              bgColor='var(--aw-bg-thir)'
                              p='5px 10px'
                              br='0px'
                              action={() => {
                                setCurrentIndex(index)
                                SCROLL(prevRef)
                              }}
                            />
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className='news__section-categories'>
            <div className='news__categories-list'>
              <div>
                {newsT.texts?.subTitle && <h3>{newsT.texts.subTitle}</h3>}
                <hr />
              </div>
              <div className='news__section-categories-content'>
                {availableCategories?.map((item) => (
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
            </div>
            <div className='news__recent-news'>
              <h3>{newsT.texts?.recentNews}</h3>
              <hr />
              <div>
                {recentNews?.id && (
                  <div key={recentNews?.id} className='news__recent-news-content'>
                    {recentNews?.video && (
                      <iframe
                        width='100%'
                        height='220px'
                        src={recentNews.video}
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                      ></iframe>
                    )}
                    {recentNews.image && (
                      <Img img={recentNews.image} w='100%' h='auto' />
                    )}
                    <div className='news__list-news-title'>
                      <p>
                        {recentNews.date} | {recentNews.category}
                      </p>
                      <h3>{recentNews.title || 'Título no disponible'}</h3>
                      <article>
                        <p>
                          {recentNews.content.slice(0, 120) ||
                            'Contenido no disponible.'}
                          ...
                        </p>
                      </article>
                    </div>
                    <Button
                      value={newsT?.texts?.btnText}
                      txtColor='var(--aw-text-btn)'
                      bgColor='var(--aw-bg-thir)'
                      p='5px 10px'
                      br='0px'
                    />
                  </div>
                )}
              </div>
              {width <= 956 && <hr style={{ marginTop: '30px' }} />}
            </div>
            <div className='news__social'>
              <h3>{newsT.texts?.follow}</h3>
              <hr />
              <SocialChannel w='24px' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
