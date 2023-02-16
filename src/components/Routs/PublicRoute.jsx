import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const PublicRoute = ({ children, restricted = false }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
