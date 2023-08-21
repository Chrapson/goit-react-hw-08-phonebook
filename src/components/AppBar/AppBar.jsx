import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import styles from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
