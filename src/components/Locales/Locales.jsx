import { useTranslation } from 'react-i18next'
import '../../locales/config/i18n'
import './Locales.css'

const Locales = () => {
  const { i18n } = useTranslation()

  const languages = [
    { name: 'EN', code: 'en', title: 'English' },
    { name: 'ES', code: 'es', title: 'Español' }
  ]

  return (
    <div className='locales__container'>
      {languages.map((opt, index) => (
        <button
          key={index}
          title={opt.title}
          onClick={() => i18n.changeLanguage(opt.code)}
        >
          {opt.name}
        </button>
      ))}
    </div>
  )
}

export default Locales
