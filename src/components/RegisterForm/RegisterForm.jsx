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
        name: form.elements.name.value,
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
      <form className="" onSubmit={handleSubmit} autoComplete="off">
        <label className="">
          Username
          <input type="text" name="name" />
        </label>
        <label className="">
          Email
          <input type="email" name="email" />
        </label>
        <label className="">
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
