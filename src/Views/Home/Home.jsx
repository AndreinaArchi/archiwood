import Button from '../../components/Button/Button'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p>{t('welcome')}</p>
      <p>{t('description')}</p>
      <Button
        value='Descubre nuestros servicios'
        action={() => alert('Action')}
        bgColor='black'
        txtColor='white'
        p='5px 20px'
        br='20px'
        fs='24px'
        className='btn-large'
      />
    </div>
  )
}

export default Home
