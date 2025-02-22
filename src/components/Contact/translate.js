import { useTranslation } from 'react-i18next'

const useTranslate = () => {
  const [t] = useTranslation('global')

  return {
    title: t('contact.title'),
    description: t('contact.description'),
    actionAddres: t('contact.actionAddres'),
    actionSocialMedia: t('contact.actionSocialMedia'),
    secondDescription: t('contact.secondDescription'),
    secondDescription_: t('contact.secondDescription_'),
    nameAndLastname: t('contact.nameAndLastname'),
    email: t('contact.email'),
    message: t('contact.message'),
    btnAction: t('contact.btnAction')
  }
}

export default useTranslate
