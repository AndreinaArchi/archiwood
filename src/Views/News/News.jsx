import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const [availableCategories, setAvailableCategories] = useState([])
  const [recentNews, setRecentNews] = useState(null) // Ahora será un objeto o null
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([])

  const parseDate = (dateString) => {
  const initDate = new Date(dateString);
  
  // Verifica si la fecha es válida
  if (isNaN(initDate.getTime())) {
    console.warn(`Fecha inválida: ${dateString}`);
    return null;
  }

  return initDate;
};
  
  

  useEffect(() => {
    if (newsT?.news && newsT?.categories) {
      const filteredCategories = newsT.categories.filter((category) =>
        newsT.news.some((news) => news.categoryId === category.id)
      );
  
      const latestNews =
        newsT.news
          .filter((news) => news.date)
          .map((news) => ({ ...news, parsedDate: parseDate(news.initDate) }))
          .filter((news) => news.parsedDate !== null)
          .sort((a, b) => b.parsedDate - a.parsedDate)[0] || null;
  
      setAvailableCategories(filteredCategories);
      setRecentNews(latestNews);
      setSelectedCategoryItems(newsT?.news);
    }
  }, [newsT]);

  const handleCategoryClick = useCallback(
    (categoryId) => {
      setSelectedCategory(categoryId)

      // Encuentra el índice de la primera noticia de esa categoría
      const categoryNewsIndex = newsT.news.findIndex(
        (news) => news.categoryId === categoryId
      )
      setCurrentIndex(categoryNewsIndex)

      // Filtra las noticias solo de la categoría seleccionada
      const newArrayNews = newsT.news.filter(
        (news) => news.categoryId === categoryId
      )
      setSelectedCategoryItems(newArrayNews)
    },
    [newsT]
  )

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
                    key={newsT.news[currentIndex]?.id}
                    className='news__section-news-content'
                  >
                    {newsT.news[currentIndex]?.video && (
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
                    {newsT.news[currentIndex]?.image && (
                      <Img
                        img={newsT.news[currentIndex].image}
                        w='100%'
                        h='550px'
                        ofit='contain'
                      />
                    )}
                    <div className='news__section-news-title'>
                      <h2>
                        {newsT.news[currentIndex]?.title ||
                          'Título no disponible'}
                      </h2>
                      <p>{`${
                        newsT.news[currentIndex]?.date || 'Fecha no disponible'
                      } | ${
                        newsT.news[currentIndex]?.category ||
                        'Categoría no disponible'
                      }`}</p>
                    </div>
                    <article>
                      <p style={{ whiteSpace: 'pre-line' }}>
                        {newsT.news[currentIndex]?.content ||
                          'Contenido no disponible.'}
                      </p>
                    </article>
                    {/* Lista de noticias */}
                    {selectedCategoryItems?.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <hr className='separete__news' />
                        <div className='news__list-news-content'>
                          {item.video && (
                            <iframe
                              width={width >= 650 ? '220px' : '100%'}
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
                            <Img
                              img={item.image}
                              ofit='contain'
                              w={width >= 650 ? '220px' : '100%'}
                              h='170px'
                            />
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
            {width <= 956 ? (
              <>
                <div className='news__recent-news'>
                  <h3>{newsT.texts?.recentNews}</h3>
                  <hr />
                  <div>
                    {recentNews && (
                      <div
                        key={recentNews?.id}
                        className='news__recent-news-content'
                      >
                        {recentNews?.video && (
                          <iframe
                            width='100%'
                            height='220px'
                            src={recentNews?.video}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            referrerPolicy='strict-origin-when-cross-origin'
                            allowFullScreen
                          ></iframe>
                        )}
                        {recentNews?.image && (
                          <Img img={recentNews?.image} w='100%' h='270px' />
                        )}
                        <div className='news__list-news-title'>
                          <p>
                            {recentNews?.date} | {recentNews?.category}
                          </p>
                          <h3>{recentNews?.title || 'Título no disponible'}</h3>
                          <article>
                            <p>
                              {recentNews?.content.slice(0, 120) ||
                                'Contenido no disponible.'}
                              ...
                            </p>
                          </article>
                        </div>
                        <Button
                          value={newsT?.texts?.btnText || 'Ver más'}
                          txtColor='var(--aw-text-btn)'
                          bgColor='var(--aw-bg-thir)'
                          p='5px 10px'
                          br='0px'
                          action={() => {
                            setCurrentIndex(
                              newsT.news.findIndex(
                                (news) => news.id === recentNews?.id
                              )
                            )
                            SCROLL(prevRef)
                          }}
                        />
                      </div>
                    )}
                  </div>
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
                            bgColor={
                              selectedCategory === item.id
                                ? 'var(--aw-bg-thir)'
                                : 'transparent'
                            }
                            txtColor={
                              selectedCategory === item.id
                                ? 'var(--aw-text-btn)'
                                : 'var(--aw-text-primary)'
                            }
                            fs='18px'
                            action={() => handleCategoryClick(item.id)}
                          />
                        </div>
                      ))}
                    </div>
                    {width <= 956 && <hr style={{ marginTop: '30px' }} />}
                  </div>
                </div>
              </>
            ) : (
              <>
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
                          bgColor={
                            selectedCategory === item.id
                              ? 'var(--aw-bg-thir)'
                              : 'transparent'
                          }
                          txtColor={
                            selectedCategory === item.id
                              ? 'var(--aw-text-btn)'
                              : 'var(--aw-text-primary)'
                          }
                          fs='18px'
                          action={() => handleCategoryClick(item.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className='news__recent-news'>
                  <h3>{newsT.texts?.recentNews}</h3>
                  <hr />
                  <div>
                    {recentNews && (
                      <div
                        key={recentNews?.id}
                        className='news__recent-news-content'
                      >
                        {recentNews?.video && (
                          <iframe
                            width='100%'
                            height='220px'
                            src={recentNews?.video}
                            title='YouTube video player'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            referrerPolicy='strict-origin-when-cross-origin'
                            allowFullScreen
                          ></iframe>
                        )}
                        {recentNews?.image && (
                          <Img img={recentNews?.image} w='100%' h='270px' />
                        )}
                        <div className='news__list-news-title'>
                          <p>
                            {recentNews?.date} | {recentNews?.category}
                          </p>
                          <h3>{recentNews?.title || 'Título no disponible'}</h3>
                          <article>
                            <p>
                              {recentNews?.content.slice(0, 120) ||
                                'Contenido no disponible.'}
                              ...
                            </p>
                          </article>
                        </div>
                        <Button
                          value={newsT?.texts?.btnText || 'Ver más'}
                          txtColor='var(--aw-text-btn)'
                          bgColor='var(--aw-bg-thir)'
                          p='5px 10px'
                          br='0px'
                          action={() => {
                            setCurrentIndex(
                              newsT.news.findIndex(
                                (news) => news.id === recentNews?.id
                              )
                            )
                            SCROLL(prevRef)
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
            <div className='news__social'>
              <h3>{newsT.texts?.follow}</h3>
              <hr />
              <SocialChannel w='24px' />
            </div>
          </div>
        </div>
      </div>
      <div className='news__btn-home'>
        <Button
          value={newsT?.texts?.home}
          txtColor='var(--aw-text-btn)'
          bgColor='var(--aw-bg-thir)'
          p='5px 10px'
          br='0px'
          action={() => navigate('/')}
        />
      </div>
    </section>
  )
}

export default News
