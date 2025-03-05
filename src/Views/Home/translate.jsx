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

const useTranslateSection4 = () => {
  const [t] = useTranslation('global')

  return {
    title: t('home_section4.title'),
    description: t('home_section4.description'),
    options: t('home_section4.options', { returnObjects: true })
  }
}

const useTranslateSection5 = () => {
  const [t] = useTranslation('global')

  return {
    title_1: t('home_section5.title'),
    paragraph: t('home_section5.paragraph'),
    buttonText: t('home_section5.buttonText')
  }
}

const useTranslateSection6 = () => {
  const [t] = useTranslation('global')

  return {
    items: t('home_section6.items', { returnObjects: true })
  }
}

const useTranslateSection7 = () => {
  const [t] = useTranslation('global')

  return {
    items: t('home_section7.items', { returnObjects: true })
  }
}

const useTranslateSection8 = () => {
  const [t] = useTranslation('global')

  return {
    title: t('home_section8.title'),
    text_1: t('home_section8.text_1'),
    text_2: t('home_section8.text_2'),
    subTitle: t('home_section8.subTitle'),
    buttonText: t('home_section8.buttonText'),
    subTitle3: t('home_section8.subTitle3'),
    items: t('home_section8.items', { returnObjects: true })
  }
}

export {
  useTranslateSection1,
  useTranslateSection2,
  useTranslateSection3,
  useTranslateSection4,
  useTranslateSection5,
  useTranslateSection6,
  useTranslateSection7,
  useTranslateSection8
}
