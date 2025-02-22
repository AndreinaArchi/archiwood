import { useTranslation } from 'react-i18next'

const useTranslateSection1 = () => {
  const [t] = useTranslation('global')

  return {
    title_1: t('home.title_1'),
    text: [t('home.text_1'), t('home.text_2')],
    title_2: t('home.title_2'),
    buttonText: t('home.buttonText')
  }
}

const useTranslateSection3 = () => {
  const [t] = useTranslation('global')

  return {
    title_1: t('home_section3.title_1'),
    text: [t('home_section3.text_1'), t('home_section3.text_2')],
    buttonText: t('home_section3.buttonText')
  }
}

export { useTranslateSection1, useTranslateSection3 }
