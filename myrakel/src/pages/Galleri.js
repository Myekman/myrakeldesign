import BasicNavbar from "../components/Navbar";
import Container from "react-bootstrap/esm/Container";
import gallerystyle from '../css/Gallery.module.css';
import Tavla1 from '../images/tavlagr.jpg';
import { Link } from "react-router-dom";


export function Galleri() {
    return (
      <div>
        <BasicNavbar />
        <Container className={gallerystyle.gallerycontainer}>
          <section id="gallery">
            <div className={gallerystyle.container}>
                <div className="row justify-content-md-center">
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                    <div className={gallerystyle.titlecontainer}>
                    <Link to="/galleri/1">
                      <h5 className="title">Green Forrest</h5>
                    </Link>
                      </div>
                    </div>
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                        <Link to="/galleri/2">
                      <h5 className="title">Green Forrest</h5>
                    </Link>
                        </div>
                    </div>
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                        <Link to="/galleri/3">
                      <h5 className="title">Green Forrest</h5>
                    </Link>
                        </div>
                    </div>
                </div> 

                <div className="row justify-content-md-center mt-4">
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                        <Link to="/galleri/4">
                          <h5 className="title">Green Forrest</h5>
                        </Link>
                        </div>
                    </div>
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                        <Link to="/galleri/5">
                          <h5 className="title">Green Forrest</h5>
                        </Link>
                        </div>
                    </div>
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                        <Link to="/galleri/6">
                          <h5 className="title">Green Forrest</h5>
                        </Link>
                        </div>
                    </div>
                </div> 

            </div>
        </section>
      </Container>
      </div>
  
    )
  }