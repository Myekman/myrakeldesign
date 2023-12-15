import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  return (
    <div id="sliderbody">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random?landscape,mountain"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random?landscape,cars"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random?landscape,night"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random?landscape,city"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
      <Button className="buttonslider button-prev" onClick={handlePrev}>
        {'<'}
      </Button>
      <Button className="buttonslider button-next" onClick={handleNext}>
        {'>'}
      </Button>
    </div>
  );
};

export default Slider;