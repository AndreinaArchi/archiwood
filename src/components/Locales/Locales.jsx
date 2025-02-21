import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Locales.css'

const Locales = () => {
  const { i18n } = useTranslation()
  const [activeLanguages, setActiveLanguages] = useState([])

  const languages = useMemo(() => [
      { name: 'EN', code: 'en', title: 'English' },
      { name: 'ES', code: 'es', title: 'Español' }
  ], [])

  useEffect(() => {
    setActiveLanguages(
      languages.map((l) => ({ ...l, active: l.code === i18n.language }))
    )
  }, [i18n.language, languages])

  return (
    <div className='locales__container'>
      {activeLanguages.map((opt) => (
        <button
          key={opt.code}
          title={opt.title}
          aria-label={`Change language to ${opt.title}`}
          className={opt.active ? 'active_lng' : ''}
          onClick={() => i18n.changeLanguage(opt.code)}
        >
          {opt.name}
        </button>
      ))}
    </div>
  )
}

export default Locales
