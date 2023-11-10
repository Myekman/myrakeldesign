import BasicNavbar from "../components/Navbar";
import Container from "react-bootstrap/esm/Container";
import gallerystyle from '../css/Gallery.module.css';

export function Gallery() {
    return (
      <div>
          <BasicNavbar />
          <Container className={gallerystyle.gallerycontainer}>
          <h1>gallery</h1>
          </Container>
      </div>
  
    )
  }