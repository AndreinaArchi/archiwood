import { useTranslation } from 'react-i18next'
import purpose1 from '/icons/purpose_objetivos1.png'
import purpose2 from '/icons/purpose_objetivos2.png'
import purpose3 from '/icons/purpose_objetivos3.png'
import purpose4 from '/icons/purpose_objetivos4.png'

const useTranslateSection1 = () => {
  const [t] = useTranslation('global')

  return {
    title_1: t('home.title_1'),
    text: [t('home.text_1'), t('home.text_2')],
    title_2: t('home.title_2'),
    buttonText: t('home.buttonText')
  }
}

const useTranslateSection2 = () => {
  const [t] = useTranslation('global')

  return [
    {
      title_1: t('home_section2.title_1'),
      title_2: t('home_section2.title_12'),
      paragraph: t('home_section2.paragraph_1')
    },
    {
      title_1: t('home_section2.title_2'),
      title_2: t('home_section2.title_22'),
      paragraph: t('home_section2.paragraph_2')
    },
    {
      title_1: t('home_section2.title_3'),
      title_2: t('home_section2.title_32'),
      paragraph: '',
      items: [
        {
          img: purpose2,
          paragraph: t('home_section2.paragraph_31')
        },
        {
          img: purpose3,
          paragraph: t('home_section2.paragraph_32')
        },
        {
          img: purpose4,
          paragraph: t('home_section2.paragraph_33')
        },
        {
          img: purpose1,
          paragraph: t('home_section2.paragraph_34')
        }
      ]
    }
  ]
}

const useTranslateSection3 = () => {
  const [t] = useTranslation('global')

  return {
    title_1: t('home_section3.title_1'),
    text: [t('home_section3.text_1'), t('home_section3.text_2')],
    buttonText: t('home_section3.buttonText')
  }
}

export { useTranslateSection1, useTranslateSection2, useTranslateSection3 }
