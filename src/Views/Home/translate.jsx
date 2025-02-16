import { useTranslation } from 'react-i18next'

const useTranslate = () => {
  const [t] = useTranslation('global')

  return {
    title_1: t('home.title_1'),
    text: [
      t('home.text_1'),
      t('home.text_2')
    ],
    title_2: t('home.title_2'),
    buttonText: t('home.buttonText')
  }
}

export default useTranslate
