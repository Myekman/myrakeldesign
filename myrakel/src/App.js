import styles from '../src/css/Navbar.module.css'
import gallerystyle from '../src/css/Gallery.module.css'
import Container from "react-bootstrap/Container";

export function Home() {
  return (
    <div>
      <h1>home</h1>
    </div>
  )
}

export function Gallery() {
  return (
    <div>
        <Navbar />
        <Container className={gallerystyle.gallerycontainer}>
        <h1>gallery</h1>
        </Container>
    </div>

  )
}

export function Navbar() {
  return (
    <div className="page-top">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
       <div className="container px-4 px-lg-5">
         <a className="navbar-brand" href="#page-top">
             <h4 className={styles.title}>MYRAKEL DESIGN</h4>
           </a>
         <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
             Menu
             <i className="fas fa-bars"></i>
         </button>
         <div className="collapse navbar-collapse" id="navbarResponsive">
             <ul className="navbar-nav ms-auto">
                 <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
                 <li className="nav-item"><a className="nav-link" href="#about">Om konstnären</a></li>
                 <li className="nav-item"><a className="nav-link" href="#projects">Tavlor</a></li>
                 <li className="nav-item"><a className="nav-link" href="#signup">Kontakt</a></li>
             </ul>
         </div>
       </div>
     </nav>
 </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
