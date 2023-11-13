import BasicNavbar from "../components/Navbar";
import Container from "react-bootstrap/esm/Container";
import gallerystyle from '../css/Gallery.module.css';
import Tavla1 from '../images/tavlagr.jpg';

export function Gallery() {
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
                          <h5 className="title">Green Forrest</h5>
                        </div>
                    </div>
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                          <h5 className="title">Green Forest</h5>
                        </div>
                    </div>
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                          <h5 className="title">Green</h5>
                        </div>
                    </div>
                </div> 

                <div className="row justify-content-md-center mt-4">
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                          <h5 className="title">Green Forrest</h5>
                        </div>
                    </div>
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                          <h5 className="title">Green Forest</h5>
                        </div>
                    </div>
                    <div className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}>
                        <img className="img-fluid mb-3 mb-lg-0" src={Tavla1} alt="..." />
                        <div className={gallerystyle.titlecontainer}>
                          <h5 className="title">Green</h5>
                        </div>
                    </div>
                </div> 

            </div>
        </section>

        <section id={gallerystyle.sliderbody}>
            <div className={gallerystyle.slider}>
        
            <div className={gallerystyle.slide}>
                <img
                src="https://source.unsplash.com/random?landscape,mountain"
                alt=""
                />
            </div>

            <div className={gallerystyle.slide}>
                <img src="https://source.unsplash.com/random?landscape,cars" alt="" />
            </div>
        
            <div className={gallerystyle.slide}>
                <img src="https://source.unsplash.com/random?landscape,night" alt="" />
            </div>
        
            <div className={gallerystyle.slide}>
                <img src="https://source.unsplash.com/random?landscape,city" alt="" />
            </div>
        
            </div>
        </section>
      </Container>
      </div>
  
    )
  }