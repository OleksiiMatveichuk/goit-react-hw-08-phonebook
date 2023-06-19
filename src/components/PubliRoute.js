import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authSelectors';

export const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={location.state?.login ?? '/'} />
  );
};
