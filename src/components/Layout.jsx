import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authSelectors';
import { logOut } from 'service/phoneboockAPI';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to={'/'}>
          PhoneBook
        </Link>
        <ul className="nav-list">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/contacts'}>
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={handleClick} to={'/'}>
                  LogOut
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/register'}>
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={'/login'}>
                  LogIn
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
