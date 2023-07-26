import { NavLink, useLocation } from 'react-router-dom';
import styles from './AuthNav.module.css';
// import register from '../../images/svg/register.svg';
// import login from '../../images/svg/login.svg';
import home from '../../images/svg/symbol-defs.svg';
import register from '../../images/svg/symbol-defs.svg';
import login from '../../images/svg/symbol-defs.svg';

export const AuthNav = () => {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.link} to="/">
        <svg
          className={`${styles.icon} ${
            location.pathname === '/' ? styles['icon-active'] : ''
          }`}
          width="40"
          height="40"
        >
          <use href={`${home}#home`} />
        </svg>
        Home
      </NavLink>
      <NavLink className={styles.link} to="/register">
        <svg className={styles.icon} width="25" height="25">
          <use href={`${register}#register`} />
        </svg>{' '}
        Register
      </NavLink>
      <NavLink className={styles.link} to="/login">
        <svg className={styles.icon} width="25" height="25">
          <use href={`${login}#login`} />
        </svg>{' '}
        Log In
      </NavLink>
    </div>
  );
};
