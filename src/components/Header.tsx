import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>React Typescript Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
