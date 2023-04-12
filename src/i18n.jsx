import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
         welcome: "Welcome",
         home:"Home",
         about:"About",
         pricing:"Pricing",
         blog:"Blogs",
         dashboard:"Dashboard",
         shopingCart:"Cart",
         signIn:"Sing In",
         signUp:"Sign Up",
         signOut:"Sign Out",
        }
      },
      fa: {
        translation: {
         welcome: "خوش آمدید",
         home:"خانه",
         about:"درباره ما",
         pricing:"قیمت گذاری ها",
         blog:"وبلاگ",
         dashboard:"داشبورد",
         shopingCart:"سبد خرید",
         signIn:"ورود",
         signUp:'ثبت نام',
         signOut:"خروج",
        }
      },
    }
  });

export default i18n;