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
         welcome: "Welcome!",
         home:"Home",
         about:"About",
         pricing:"Pricing",
         blog:"Blogs",
         dashboard:"Dashboard",
         shopingCart:"Cart",
         signIn:"Sing In",
         signUp:"Sign Up",
          signOut: "Sign Out",
          email:"Enter your email",
          emailuserName: 'Enter your username or email address',
          password: "Enter your Password",
          signUpT1: "If you already have an account,You can",
          loginHere: "Login here!",
          forgotPassword: "Forgot password?",
          remember: "Remember me next time",
          passwordError:"Password is required",
          error:"Something went wrong",
          emailRequied: "Email is required",
          emailValid:"Must be a valid email"
        }
      },
      fa: {
        translation: {
         welcome: "  !خوش آمدید",
         home:"خانه",
         about:"درباره ما",
         pricing:"قیمت گذاری ها",
         blog:"وبلاگ",
         dashboard:"داشبورد",
         shopingCart:"سبد خرید",
         signIn:"ورود",
         signUp:'ثبت نام',
          signOut: "خروج",
          email:"ایمیل",
          emailuserName: 'ایمیل یا نام کاربری خود را وارد کنید',
          signUpT1: "اگر در حال حاضر حساب کاربری دارید.",
          loginHere:"از اینجا وارد شوید!",
          password: " رمز عبور خود را وارد کنید",
          forgotPassword: "بازیابی رمز عبور",
          passwordError:'واردکردن رمز عبو الزامیست',
          error:'خطای غیر منتظره',
          emailRequied: 'وارد کردن ایمیل الزامیست',
          emailValid:"ایمیل معتبر نمی باشد"
        }
      },
    }
  });

export default i18n;