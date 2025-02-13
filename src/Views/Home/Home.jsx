import Locales from '../../components/Locales/Locales'
import Button from '../../components/Button/Button'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p>{t('welcome')}</p>
      <p>{t('description')}</p>
      <Locales />
      <Button
        value='Descubre nuestros servicios'
        action={() => alert('Botón presionado')}
        bgColor='black'
        txtColor='white'
        p='5px 20px'
        className='btn-large'
      />
    </div>
  )
}

export default Home
