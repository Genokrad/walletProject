import { Link } from 'react-router-dom';
import { LoginForm } from 'components/Login/Login';

export const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <Link to="/registration">Registration</Link>
    </>
  );
};
