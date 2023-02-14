import RegistrationForm from 'components/Registration/Registration';
import { Link } from 'react-router-dom';

export const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <Link to="/login">Login</Link>
    </>
  );
};
