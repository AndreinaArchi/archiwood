import { useTranslation } from 'react-i18next'

const useTranslate  = () => {
  const [t] = useTranslation('global')

  return [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.about'), path: '/about-us' },
    { name: t('navbar.products'), path: '/products' },
    { name: t('navbar.proyects'), path: '/studies' },
    { name: t('navbar.contact'), path: '/contact' }
  ]
}

export default useTranslate 
