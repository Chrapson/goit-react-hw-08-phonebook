import { Helmet } from 'react-helmet-async';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello,</h1>
        <h2 className={styles.subtitle}>Welcome to Phonebook App</h2>
        <p className={styles.info}>
          <Link className={styles.link} to="/login">
            Log In{' '}
          </Link>
          To manage your contacts
        </p>
      </div>
    </>
  );
};
