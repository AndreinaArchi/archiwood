import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

export const useTranlateNews = () => {
  const { t } = useTranslation('global')

  return useMemo(
    () => ({
      newsT: t('news', { returnObjects: true })
    }),
    [t]
  )
}
