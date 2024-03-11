import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
// import { HashLink } from 'react-router-hash-link';

import styles from '../../src/css/Navbar.module.css';

function BasicNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary page-top">
        <Container>
          <Navbar.Brand href="/" className={styles.logotransition}>MYRAKEL DESIGN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.hover} href="/gallery">Galleri</Nav.Link>
              <Nav.Link to="/#about" className={styles.hover}>Om konstnären</Nav.Link>
              <Nav.Link href="/contact" className={styles.hover}>Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default BasicNavbar;