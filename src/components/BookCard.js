import React from "react";
import { Card } from "react-bootstrap";

export default function BookCard() {
  return (
    <Card
      className="m-3 p-2 d-flex align-items-center justify-content-center text-center"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" style={{ width: "16rem", height: "16rem" }} src={require('../images/bookcover.png')} />
      <Card.Body className="">
        <Card.Title>Book Title</Card.Title>
        <Card.Text className="mt-3">Author: John Smith</Card.Text>
        <Card.Text>Pages: 222</Card.Text>
        <Card.Text>Read</Card.Text>
      </Card.Body>
    </Card>
  );
}
