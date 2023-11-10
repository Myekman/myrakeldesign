import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';

// import styles from '../../src/css/Navbar.module.css';

function BasicNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary page-top">
        <Container>
          <Navbar.Brand href="#home">MYRAKEL DESIGN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/galleri">Galleri</Nav.Link>
              <Nav.Link href="#about">Om konstnären</Nav.Link>
              <Nav.Link href="#kontakt">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default BasicNavbar;