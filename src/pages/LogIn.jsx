import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'service/phoneboockAPI';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = { name, email };
      await dispatch(logIn(user)).unwrap();
      navigate('/contacts', { replace: true });
      setName('');
      setEmail('');
    } catch (error) {}
  };

  return (
    <>
      <p>LogIn</p>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="text"
            name="name"
            value={name}
            // pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </InputGroup>
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
