import React from 'react';
import './Stylesheet/audiHome.css'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

function audiHome() {
    return (
        <Carousel className="carousel-fade">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images\a4avant.jpg"
          alt="Audi"
        />
        <Carousel.Caption className="Caption1" >
          <Button href="#" className="button1" variant="primary" size="lg">Audi A4 Avant g-tron</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images\a3.jpg"
          alt="Toyota"
        />
        <Carousel.Caption className="Caption">
          <Button href="/toyotaHome" className="button" variant="primary" size="lg">Audi A3 Sedan</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default audiHome
