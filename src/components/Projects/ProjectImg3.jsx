import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import toy from "../../Assets/Projects/toy.png";
import img11 from "/public/11.png"
import img12 from "/public/12.png"
import img13 from "/public/13.png"
import img14 from "/public/14.png"
import img15 from "/public/15.png"

function ProjectImg3() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={toy}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Home</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img11}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img12}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img13}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img14}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img15}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectImg3;