import { Helmet } from 'react-helmet-async';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import hero from '../../images/hero.jpg';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <div className={styles.container}>
        {/* <img src={hero} alt="phonebook" width="70" height="50"></img> */}
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
