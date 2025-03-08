import { useTranslation } from 'react-i18next'

const useTranslate = () => {
  const [t] = useTranslation('global')

  return [
    { id: 1, name: t('navbar.home'), path: '/' },
    {
      id: 2,
      name: t('navbar.about'),
      options: [
        { id: 21, name: t('navbar.purspose'), ref: 'purpose' },
        { id: 22, name: t('navbar.showroom'), ref: 'showroom' },
        { id: 23, name: t('navbar.process'), ref: 'process'},
        { id: 24, name: t('navbar.news'), path: '/news' }
      ]
    },
    {
      id: 3,
      name: t('navbar.products'), ref: 'products'
      /* options: [
        { id: 31, name: t('navbar.kitchen'), ref: '#' },
        { id: 32, name: t('navbar.closets'), ref: '#' },
        { id: 33, name: t('navbar.doors'), ref: '#' },
        { id: 34, name: t('navbar.screens'), ref: '#' },
        { id: 35, name: t('navbar.vanities'), ref: '#' },
        { id: 36, name: t('navbar.counter_top'), ref: '#' },
        { id: 37, name: t('navbar.plasters'), ref: '#' },
        { id: 38, name: t('navbar.plumbing'), ref: '#' },
        { id: 39, name: t('navbar.wall_unit'), ref: '#' },
        { id: 311, name: t('navbar.art'), ref: '#' }
      ] */
    },
    { id: 4, name: t('navbar.proyects'), path: '/proyects' },
    { id: 5, name: t('navbar.contact'), path: '/contact' }
  ]
}

export default useTranslate
