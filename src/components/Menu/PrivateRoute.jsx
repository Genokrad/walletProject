import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLoggenIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = !isLoggenIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
