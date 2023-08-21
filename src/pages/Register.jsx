import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet-async';
export const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};
