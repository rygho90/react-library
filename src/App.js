import { Container, Row, Navbar, Nav, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import BookCard from "./components/BookCard";

function App() {
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  const handleCloseAddBookModal = () => setShowAddBookModal(false);
  const handleShowAddBookModal = () => setShowAddBookModal(true);

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
          <Button onClick={handleShowAddBookModal}>+ Add New Book</Button>
        </Container>
        <Container className="mt-3">
          <Row
            xs={1}
            sm={2}
            md={3}
            lg={4}
            className="d-flex align-items-center justify-content-center"
          >
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </Row>
        </Container>
      </Container>

      <Modal
        show={showAddBookModal}
        onHide={handleCloseAddBookModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hello World. It's me, ya boi.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseAddBookModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
