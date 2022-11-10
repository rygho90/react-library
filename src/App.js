import {
  Container,
  Row,
  Navbar,
  Nav,
  Button,
  Modal,
  Form,
  Image,
} from "react-bootstrap";
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
          <Modal.Title>New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Search for a title...</p>
          <Form>
            <Form.Group className="mb-3" controlId="formSearch">
              <Form.Control type="input" placeholder="Search" autoFocus />
            </Form.Group>
          </Form>
          <hr></hr>
          <p>...or add information manually</p>

          <Row>
          <Image
            src={require("./images/bookcover.png")}
            alt="book cover"
            thumbnail
            className="mx-auto mb-3"
            style={{ width: 200 }}
          />
          </Row>

          <Form>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="input" placeholder="Enter book title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control type="input" placeholder="Enter author name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPages">
              <Form.Label>Pages</Form.Label>
              <Form.Control type="input" placeholder="Enter number of pages" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseAddBookModal}>Add Book</Button>
          <Button onClick={handleCloseAddBookModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
