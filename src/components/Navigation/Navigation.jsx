import { useAuth } from 'hooks/useAuth';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../../images/logo.png';
import contacts from '../../images/svg/symbol-defs.svg';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();

  return (
    <nav>
      <div className={styles.wrapper}>
        <NavLink className={styles.link} to="/">
          <img src={logo} width="70" height="70" alt="logo" />
        </NavLink>
        {isLoggedIn && (
          <NavLink className={styles.link} to="/contacts">
            <svg
              className={`${styles.icon} ${
                pathname === '/contacts' ? styles['icon-active'] : ''
              }`}
              width="25"
              height="25"
            >
              <use href={`${contacts}#contacts`} />
            </svg>
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
};
