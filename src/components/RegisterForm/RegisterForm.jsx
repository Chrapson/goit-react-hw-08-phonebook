import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import styles from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.login.value,
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
          Username
          <input
            className={styles.input}
            // placeholder="Username"
            type="text"
            name="login"
          />
        </label>
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
          Register
        </button>
      </form>{' '}
      <div>
        Have an account?{' '}
        <Link className={styles.link} to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
};
