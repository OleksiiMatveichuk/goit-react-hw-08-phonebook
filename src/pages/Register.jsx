import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Register = () => {
  return (
    <>
      <p>Register</p>
      <form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="text"
            name="name"
            // value={name}
            // pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // onChange={handleChange}
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
            // value={number}
            // pattern="^\+[1-9]{1}[0-9]{3,14}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // onChange={handleChange}
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
            // value={number}
            // pattern="^\+[1-9]{1}[0-9]{3,14}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // onChange={handleChange}
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
