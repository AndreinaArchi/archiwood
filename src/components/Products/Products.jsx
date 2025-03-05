import './Products.css'

const Products = ({ children, arrayText }) => {
  return (
    <div className='products__container'>
      <div className='products__content'>
        <div className='products__content-title'>
          <h2>{arrayText.title}</h2>
        </div>
        <div className='products__content-paragraph'>
          <article>
            <p>{arrayText.text_1}</p>
            <p>{arrayText.text_2}</p>
          </article>
        </div>
        <div className='products__content-subtitle'>
          <h3>{arrayText.subTitle}</h3>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Products
