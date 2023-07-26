import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import logo from '../../images/logo.png';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.link} to="/">
        <img src={logo} width="70" height="70" />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
