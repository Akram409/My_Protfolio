import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import toy from "../../Assets/Projects/toy.png";
import img5 from "/public/5.png"
import img6 from "/public/6.png"
import img7 from "/public/7.png"
import img8 from "/public/8.png"
import img9 from "/public/9.png"
import img10 from "/public/10.png"

function ProjectImg2() {
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
          src={img5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img8}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img9}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img10}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectImg2;