import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="">
            PhoneBook
            {/* <svg width="18px" height="18px">
              <use href="../image/phoneBook.svg"></use>
            </svg> */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">
              <NavLink to={'/register'}>Register</NavLink>
            </Nav.Link>
            <Nav.Link href="">
              <NavLink to={'/login'}>LogIn</NavLink>
            </Nav.Link>
            <Nav.Link href="">
              <NavLink to={'/contacts'}>Contacts</NavLink>
            </Nav.Link>
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
