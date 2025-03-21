import { useTranslation } from 'react-i18next'

export const useTranlateNews = () => {
  const [t] = useTranslation('global')

  return {
    newsT: t('news', { returnObjects: true }),
  }
}