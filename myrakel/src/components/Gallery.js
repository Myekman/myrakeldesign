// Gallery.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import gallerystyle from '../css/Gallery.module.css';
import BasicNavbar from './Navbar';

import Tavla1 from '../images/tavlagr.jpg';
import Tavla2 from '../images/tavlabrun.jpg';
import Tavla3 from '../images/tavlaröd.jpg';
import Tavla4 from '../images/tavlama.jpg';
import PaintingDetail from './PaintingDetail';

const paintingsData = [
  { id: 1, src: Tavla1, title: "Green Forrest" },
  { id: 2, src: Tavla2, title: "Brownie" },
  { id: 3, src: Tavla3, title: "Red Love" },
  { id: 4, src: Tavla4, title: "Swirl" },
  // Add more paintings as needed
];

const Gallery = () => {
  const [selectedPainting, setSelectedPainting] = useState(null);

  const handlePaintingClick = (painting) => {
    setSelectedPainting(painting);
  };

  return (
    <div>
      {/* ... */}
      <BasicNavbar />
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
                      onClick={() => handlePaintingClick(painting)}
                    />
                    <div className={gallerystyle.titlecontainer}>
                      <Link
                        to={`/gallery/${painting.id}`}
                        state={{ painting }} // Pass painting details as state
                      >
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

      {/* Optionally, render the PaintingDetail component conditionally */}
      {selectedPainting && (
        <PaintingDetail painting={selectedPainting} />
      )}
    </div>
  );
};

export default Gallery;