import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authSelectors';
import { logOut } from 'service/phoneboockAPI';
import image from '../image/phoneBook.svg';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">
            <Link to={'/'}>
              PhoneBook
              {/* <img src={image} alt="logo" style={{ width: '30px' }} /> */}
              {/* <svg width="18px" height="18px">
                <use href={image}></use>
              </svg> */}
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link href="">
                  <NavLink to={'/contacts'}>MyContacts</NavLink>
                </Nav.Link>
                <button onClick={handleClick}>
                  logOut
                  {/* <NavLink to={'/'}>LogOut</NavLink> */}
                </button>
              </>
            ) : (
              <>
                <Nav.Link href="">
                  <NavLink to={'/register'}>Register</NavLink>
                </Nav.Link>
                <Nav.Link href="">
                  <NavLink to={'/login'}>LogIn</NavLink>
                </Nav.Link>
              </>
            )}
            {/* <Nav.Link href="">
              <NavLink to={'/register'}>Register</NavLink>
            </Nav.Link>
            <Nav.Link href="">
              <NavLink to={'/login'}>LogIn</NavLink>
            </Nav.Link>
            <Nav.Link href="">
              <NavLink to={'/contacts'}>Contacts</NavLink>
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      {/* <header>
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
      </header> */}
      <Outlet />
    </>
  );
};
// export default Layout;
