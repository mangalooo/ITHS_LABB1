import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ContactForm() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formFirstname">
          <Form.Label>Förnamn</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formLastname">
          <Form.Label>Efternamn</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formLastname">
          <Form.Label>Mobil</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>E-post</Form.Label>
          <Form.Control type="email" placeholder="test@test.nu" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Adress</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formPostCode">
          <Form.Label>Postnummer</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <div className="text-center">
      <Button variant="outline-success" type="submit"> 
        Submit
      </Button>
      </div>
    </Form>
  );
}

export default ContactForm;

