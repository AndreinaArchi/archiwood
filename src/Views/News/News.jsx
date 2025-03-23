import React, { useEffect, useState } from 'react'
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

  const [availableCategories, setAvailableCategories] = useState([])
  const [allCategoriesNews, setAllCategoriesNews] = useState([])
  const [recentNews, setRecentNews] = useState({})

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

    const parts = dateString.split(' ') // ["Enero", "18,", "2024"]
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
      // Filtrar categorías que tienen al menos una noticia
      const filteredCategories = newsT.categories.filter((category) =>
        newsT.news.some((news) => news.categoryId === category.id)
      )

      // Obtener las primeras 3 noticias de cada categoría
      const categorizedNews = filteredCategories.flatMap((category) =>
        newsT.news.filter((news) => news.categoryId === category.id).slice(0, 3)
      )

      // Obtener la noticia más reciente
      const latestNews =
        newsT.news
          .filter((news) => news.date)
          .map((news) => ({ ...news, parsedDate: parseDate(news.date) }))
          .filter((news) => news.parsedDate)
          .sort((a, b) => b.parsedDate - a.parsedDate)[0] || null

      // Actualizar estados
      setAvailableCategories(filteredCategories)
      setAllCategoriesNews(categorizedNews)
      setRecentNews(latestNews)
    }
  }, [])

  console.log(availableCategories)
  console.log(allCategoriesNews)
  console.log(recentNews)

  /**QUE NECESITO?
   * 1- En el listado de las categorias, hay que excluir la categoria que aun no disponga de información.
   * 2- la primera categoria que se seleccionara será por default todas las categorias. Todas las categorias comprende traer de mi array de news
   * las primeras 2 noticias existente de cada categoria. Considerar que no todas las categorias tendrán por ahora informacion.
   * 3- En noticia reciente se mostrará la ultima noticia que se haya publicado.
   * Necesito la logica de esto las const
   *
   *
   *
   *
   * */

  console.log(recentNews)

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
            <div>
              {newsT.news?.map((item) => (
                <div key={item.id} className='news__section-news-content'>
                  {item.video && (
                    <iframe
                      width='100%'
                      height='500px'
                      src={item.video}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      referrerPolicy='strict-origin-when-cross-origin'
                      allowFullScreen
                    ></iframe>
                  )}
                  {item.image && <Img img={item.image} w='100%' h='auto' />}
                  <div className='news__section-news-title'>
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
                </div>
              ))}
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
                {/**RECENT NEWS recentNews*/}
                <div
                  key={recentNews?.id}
                  className='news__recent-news-content'
                >
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
                  <div>
                    <h3>{recentNews.title || 'Título no disponible'}</h3>
                  </div>
                </div>
              </div>
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
