import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="p-2">
        <Container>
          <Navbar.Brand href="#">Guest's Library</Navbar.Brand>
          <Nav>
            <Nav.Link href="#" className=".text-light">
              Log In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
