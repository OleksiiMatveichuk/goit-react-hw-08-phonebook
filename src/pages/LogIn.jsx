import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'service/phoneboockAPI';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    try {
      const user = { email, password };
      dispatch(logIn(user));
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('Try again!', error);
    }
  };

  return (
    <>
      <p>LogIn</p>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Email
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="email"
            name="email"
            value={email}
            // pattern="^\+[1-9]{1}[0-9]{3,14}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Password
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="password"
            name="password"
            value={password}
            // pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </InputGroup>
        <button
          style={{
            minWidth: '100px',
            borderRadius: '8px',
            backgroundClip: '#6c757d',
          }}
        >
          LogIn
        </button>
      </form>
    </>
  );
};

export default LogIn;
