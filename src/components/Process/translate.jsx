import { useTranslation } from 'react-i18next'

const useTranslate = () => {
  const [t] = useTranslation('global')

  return {
    button_on: t('home_section4.btn_on'),
    button_off: t('home_section4.btn_off')
  }
}

export default useTranslate