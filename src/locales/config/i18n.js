import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../en.json';
import es from '../es.json';


i18next
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Conecta i18next con React
  .init({
    fallbackLng: 'en', // Idioma de respaldo
    debug: false, // Puedes ponerlo en `true` para depuración
    detection: {
      // Opciones de detección de idioma
      // Si deseas evitar que `i18next` almacene en `localStorage`, comenta o elimina esta línea
      caches: ['localStorage'],
      // Usa `localStorage` para almacenar el idioma
      order: ['localStorage', 'navigator']
      // Primero busca en `localStorage`, luego en el navegador
    },
    resources: {
      es: {
        global: es
      },
      en: {
        global: en
      }
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18next
