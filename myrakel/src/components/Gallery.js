// Gallery.js
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import gallerystyle from '../css/Gallery.module.css';
import paintingsData from '../data/paintingsData';

const Gallery = () => {

  return (
    <div>
      {/* ... */}
      <Container className={gallerystyle.gallerycontainer}>
        <section>
          <div className={gallerystyle.gallery}>
            <div className={gallerystyle.container}>
              <div className="row justify-content-md-center">
                {paintingsData.map((painting) => (
                  <div
                    key={painting.id}
                    className={`${gallerystyle.tavlacontainer} col-xs-12 col-lg-3`}
                  >
                    <img
                      className={`${gallerystyle.fixedSizeImage} img-fluid mb-3 mb-lg-0`}
                      src={painting.src}
                      alt={painting.title}
                    />
                    <div className={gallerystyle.titlecontainer}>
                    <Link to={`/gallery/${painting.id}`}>
                        <h5 className="title">{painting.title}</h5>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
      {/* ... */}

    
    </div>
  );
};

export default Gallery;