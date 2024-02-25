import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";

function ContactForm() {

  const [list, setList] = useState(['']);

  const [firstname, setFirstname] = useState(['']);
  const [lastname, setLastname] = useState(['']);
  const [email, setEmail] = useState(['']);
  const [address, setAddress] = useState(['']);
  const [mobile, setMobile] = useState(['']);
  const [city, setCity] = useState(['']);
  const [postcode, setPostCode] = useState(['']);

  const handleFirstname = (event) => {
    setFirstname(event.target.value);
  }

  const handleLastname = (event) => {
    setLastname(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleAddress = (event) => {
    setAddress(event.target.value);
  }

  const handleMobile = (event) => {
    setMobile(event.target.value);
  }

  const handleCity = (event) => {
    setCity(event.target.value);
  }

  const handlePostCode = (event) => {
    setPostCode(event.target.value);
  }

  const addList = () => {

    const newList = list.concat(firstname, lastname, email, address, mobile, city, postcode);
    setList(newList);
  }

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formFirstname">
          <Form.Label>Förnamn</Form.Label>
          <Form.Control value={firstname} onChange={handleFirstname} />
        </Form.Group>

        <Form.Group as={Col} controlId="formLastname">
          <Form.Label>Efternamn</Form.Label>
          <Form.Control value={lastname} onChange={handleLastname} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>E-post</Form.Label>
          <Form.Control type="email" value={email} onChange={handleEmail} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Adress</Form.Label>
        <Form.Control value={address} onChange={handleAddress} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formMobile">
          <Form.Label>Mobil</Form.Label>
          <Form.Control value={mobile} onChange={handleMobile} />
        </Form.Group>

        <Form.Group as={Col} controlId="formCity">
          <Form.Label>Stad</Form.Label>
          <Form.Control value={city} onChange={handleCity} />
        </Form.Group>

        <Form.Group as={Col} controlId="formPostCode">
          <Form.Label>Postnummer</Form.Label>
          <Form.Control value={postcode} onChange={handlePostCode} />
        </Form.Group>
      </Row>

      <div className="text-center">
        <Button variant="outline-success" type="submit" onSubmit={addList(firstname, lastname, email, address, mobile, city, postcode)}> 
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm;

