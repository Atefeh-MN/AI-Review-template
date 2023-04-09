import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         welcome: "Welcome to React"
        }
      },
      fr: {
        translation: {
         welcome: "خوش آمدید"
        }
      },
    }
  });

export default i18n;