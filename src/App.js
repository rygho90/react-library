import {
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="p-2">
        <Container>
          <Navbar.Brand href="#">
            <h1>Guest's Library</h1>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#" className=".text-light">
              Log In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Container className="d-flex align-items-center justify-content-center">
          <Button>+ Add New Book</Button>
        </Container>
        <Container className="mt-3">
          <Row xs={1} sm={2} md={3} lg={4} className="d-flex align-items-center justify-content-center">
            <Card className="m-3" style={{ width: "18rem", height: "18rem" }}>Hello World</Card>
            <Card className="m-3" style={{ width: "18rem", height: "18rem" }}>Hello World</Card>
            <Card className="m-3" style={{ width: "18rem", height: "18rem" }}>Hello World</Card>
            <Card className="m-3" style={{ width: "18rem", height: "18rem" }}>Hello World</Card>
            <Card className="m-3" style={{ width: "18rem", height: "18rem" }}>Hello World</Card>
            <Card className="m-3" style={{ width: "18rem", height: "18rem" }}>Hello World</Card>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
