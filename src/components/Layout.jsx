import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={'/register'}>Registration</NavLink>
            </li>
            <li>
              <NavLink to={'/login'}>LogIn</NavLink>
            </li>
            <li>
              <NavLink to={'/contacts'}>Contacts</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
// export default Layout;
