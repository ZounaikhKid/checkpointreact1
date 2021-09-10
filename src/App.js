import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ReactCheckPoint</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Container className="my-5">
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control placeholder="First name" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control placeholder="Last name" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Col>
    </Row>
</Container>
    </div>
  );
}

export default App;
