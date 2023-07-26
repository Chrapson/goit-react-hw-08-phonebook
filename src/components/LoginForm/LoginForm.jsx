import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img src={logo} width="50" height="50" alt="logo" />
      </Link>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        Log in to Phonebook
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            // placeholder="Email"
            type="email"
            name="email"
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            // placeholder="Password"
            type="password"
            name="password"
          />
        </label>
        <button className={styles.button} type="submit">
          Log In
        </button>
      </form>
      <div>
        Don't have an account?{' '}
        <Link className={styles.link} to="/register">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
