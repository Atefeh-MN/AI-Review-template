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
          signUp: "Sign Up",
           logIn:"Login",
          signOut: "Sign Out",
          email:"Enter your email",
          emailuserName: 'Enter your username or email address',
          password: "Enter your Password",
          h1signIn: 'Sign in to',
          h3signIn: "Lorem Ipsum is simply",
          h5signIn: "If you dont have an account register",
          h5signIn2: "You can",
          registerHere:"Register here!",
          signUpT1: "If you already have an account,You can",
          loginHere: "Login here!",
          forgotPassword: "Forgot password?",
          remember: "Remember me next time",
          passwordError:"Password is required",
          error:"Something went wrong",
          emailRequied: "Email is required",
          emailValid: "Must be a valid email",
          emailP: "lorem@gmail.com",
          passwordP: "password",
          signInwithGoogle:"Sign in with Google"
        }
      },
      fa: {
        translation: {
         welcome: "خوش آمدید!",
         home:"خانه",
         about:"درباره ما",
         pricing:"قیمت گذاری ها",
         blog:"وبلاگ",
         dashboard:"داشبورد",
         shopingCart:"سبد خرید",
          signIn:"ورود به حساب کاربری",
         logIn:"ورود",
         signUp:'ثبت نام',
          signOut: "خروج",
          email: 'ایمیل خود را وارد کنید',
          emailP:"lorem@gmail.com",
          emailuserName: 'ایمیل یا نام کاربری خود را وارد کنید',
          signUpT1: "اگر در حال حاضر حساب کاربری دارید.",
          loginHere:"از اینجا وارد شوید!",
          password: " رمز عبور خود را وارد کنید",
          passwordP:"رمز عبور",
          forgotPassword: "بازیابی رمز عبور",
          passwordError:'واردکردن رمز عبو الزامیست',
          error:'خطای غیر منتظره',
          emailRequied: 'وارد کردن ایمیل الزامیست',
          emailValid: "ایمیل معتبر نمی باشد",
          signInwithGoogle: "ورود با حساب گوگل",
          h1signIn: 'ورود به حساب کاربری',
          h3signIn: " ",
          h5signIn: "اگر حساب کاربری ندارید.",
          h5signIn2: "شما میتوانید",
          registerHere:"از اینجا ثبت نام کنید!",
        }
      },
    }
  });

export default i18n;