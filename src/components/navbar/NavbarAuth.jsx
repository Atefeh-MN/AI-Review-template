
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
function NavBarAuth() {
      const { t } = useTranslation();
  return (
    <div className='navAuth'>
      <Link className="nav-link d-flex" to='auth/sign-in'>
        {t('signIn')}
        </Link>
       <div className='pt-2 pb-2'style={{color:'#c5c5c5',textAlign:'center'}}>|</div>
       <Link className="nav-link" to='auth/sign-up'>{t('signUp')}</Link>
    </div>
  );
}

export default NavBarAuth;