import { useTranslation } from "react-i18next"
import Locales from "./components/Locales/Locales"

const App = () => {
  const {t} = useTranslation()

  return (
    <div>
    <p>{t('welcome')}</p>
    <p>{t('description')}</p>
      <Locales />
    </div>
  )
}

export default App