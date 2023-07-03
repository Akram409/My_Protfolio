import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import drg from "../../Assets/Projects/drg.png"
import img1 from "/public/1.png"
import img2 from "/public/2.png"
import img3 from "/public/3.png"
import img4 from "/public/4.png"

function ProjectImg() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={drg}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Home</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectImg;