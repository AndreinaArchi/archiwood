import { useTranslation } from 'react-i18next'
import useWidth from '../../hooks/useWidth'
import '../../locales/config/i18n'
import './Locales.css'

const Locales = ({showMenu, setShowMenu}) => {
  
  const { i18n } = useTranslation()

  const languages = [
    { name: 'EN', code: 'en', title: 'English' },
    { name: 'ES', code: 'es', title: 'Español' }
  ]
  const width = useWidth()

  return (
    <div className='locales__container'>
      {languages.map((opt, index) => (
        <button
          key={opt.code}
          title={opt.title}
          aria-label={`Change language to ${opt.title}`}
          onClick={() => i18n.changeLanguage(opt.code)}
        >
          {opt.name}
          {index < languages.length - 1 && <div>|</div>}
        </button>
      ))}
      {width <= 936 && (
        <div
          className={`locales__container-menu ${showMenu ? 'active-menu' : ''}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  )
}

export default Locales
