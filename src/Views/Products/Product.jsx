import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslateSection8 } from '../Home/translate'
import './Product.css'
import arrow_left from '/icons/arrow-left.svg'
import arrow_right from '/icons/arrow-right.svg'
import useWidth from '../../hooks/useWidth'

const Button = React.lazy(() => import('../../components/Button/Button'))
const Card = React.lazy(() => import('../../components/CardProduct/Card'))
const Img = React.lazy(() => import('../../components/Img/Img'))

const Product = () => {
  const width = useWidth()
  const arrayObjetct = useTranslateSection8()

  const location = useLocation()
  const idProducts = location.pathname.split('/')[2]

  const parentItem = arrayObjetct.items.find(
    (parent) => parent.id.toString() === idProducts
  )

  const newArrayProducts =  arrayObjetct.items.filter((item) => item.id !== parentItem.id)
  
  const [currentProduct, setCurrentProduct] = useState(() => ({
    show: true,
    product: parentItem?.items[0]
  }))

  if (!parentItem) {
    return <div>Producto no encontrado</div>
  }

  const highlightText = (text = '', word) =>
    text.replace(new RegExp(word, 'g'), `<strong>${word}</strong>`)

  const handleProduct = (item) => {
    if (currentProduct.product.id && item.id === currentProduct.product.id) {
      return
    }

    setCurrentProduct((prev) => ({
      ...prev,
      show: false
    }))

    setTimeout(() => {
      setCurrentProduct({
        show: true,
        product: item
      })
    }, 300)
  }

  const handleNext = () => {
    const currentIndex = parentItem.items.findIndex(
      (item) => item.id === currentProduct.product?.id
    )

    if (currentIndex === -1) return

    const nextIndex = (currentIndex + 1) % parentItem.items.length
    handleProduct(parentItem.items[nextIndex])
  }

  const handlePrev = () => {
    const currentIndex = parentItem.items.findIndex(
      (item) => item.id === currentProduct.product?.id
    )

    if (currentIndex === -1) return

    const prevIndex =
      (currentIndex - 1 + parentItem.items.length) % parentItem.items.length
    handleProduct(parentItem.items[prevIndex])
  }

  return (
    <div className='product__container'>
      <div className='product__hero-content'>
        <Img
          img={parentItem.imgSection}
          w='100%'
          h={width > 599 ? '590px' : '200px'}
        />
        <h1>{parentItem.title}</h1>
      </div>
      <div className='product__content-description'>
        <p
          className='line-height'
          dangerouslySetInnerHTML={{
            __html: highlightText(parentItem.text_1, 'Archiwood')
          }}
        ></p>
        <p
          className='line-height'
          dangerouslySetInnerHTML={{
            __html: highlightText(parentItem.text_2, 'Archiwood')
          }}
        ></p>
      </div>
      <div className='product__content-slice-img'>
        <div className='product__content-array-img'>
          {parentItem.items.map((item) => (
            <div
              key={item.id}
              className={`${
                currentProduct.product.id === item.id ? 'selected' : ''
              }`}
            >
              <Img img={item.img} action={() => handleProduct(item)} />
            </div>
          ))}
        </div>
        <div className='product__buttons'>
          <div className='product__button left'>
            <Img img={arrow_left} w='30px' h='30px' action={handlePrev} />
          </div>
          <div className='product__button right'>
            <Img img={arrow_right} w='30px' h='30px' action={handleNext} />
          </div>
        </div>
      </div>
      {currentProduct.show && (
        <div className={`product__content-description-prod`}>
          <div className='product__content-description-prod-img'>
            <Img img={currentProduct.product?.imgFull} w='100%' />
          </div>
          <div className='product__content-description-prod-article'>
            <article>
              <h3>{currentProduct.product?.title}</h3>
              {currentProduct.product?.text_1 && (
                <p
                  className='line-height'
                  dangerouslySetInnerHTML={{
                    __html: highlightText(
                      currentProduct.product.text_1,
                      'Archiwood'
                    )
                  }}
                ></p>
              )}
              {currentProduct.product?.text_2 && (
                <p
                  className='line-height'
                  dangerouslySetInnerHTML={{
                    __html: highlightText(
                      currentProduct.product.text_2,
                      'Archiwood'
                    )
                  }}
                ></p>
              )}
              {currentProduct.product?.text_3 && (
                <p
                  dangerouslySetInnerHTML={{
                    __html: highlightText(
                      currentProduct.product.text_3,
                      'Archiwood'
                    )
                  }}
                ></p>
              )}
              {currentProduct.product?.subTitle && (
                <p className='product__content-description-prod-article-subtitle line-height'>
                  {currentProduct.product?.subTitle}
                </p>
              )}
            </article>
            <div className='product__buttons'>
              <div className='product__button left'>
                <Img img={arrow_left} w='30px' h='30px' action={handlePrev} />
              </div>
              <div className='product__button right'>
                <Img img={arrow_right} w='30px' h='30px' action={handleNext} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='products__content-action'>
        <Button
          value={arrayObjetct.buttonText}
          action={() => alert('Action')}
          bgColor='var(--aw-bg-btn)'
          txtColor='var(--aw-text-btn)'
          p='10px 25px'
          br='20px'
          fs={width > 768 ? '16px' : '14px'}
          className='btn-large'
        />
        <h3>{arrayObjetct.subTitle3}</h3>
      </div>
      <div>
        <div className='products__content-options'>
          <div className='product__content-title'>
            <h2>{arrayObjetct.more_options}</h2>
          </div>
        </div>
        <div className='products__array-cards'>
          {newArrayProducts?.map((item) => (
            <Card key={item.id} arrayItems={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Product
