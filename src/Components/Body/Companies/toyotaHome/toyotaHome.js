import React from 'react';
import './StyleSheet/toyotaHome.css'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

function toyotaHome() {
  return (
    <Carousel className="carousel-fade">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images\allion.jpg"
          alt="Toyota"
        />
        <Carousel.Caption className="Caption2" >
          <Button href="/carDetails" className="button2" variant="primary" size="lg">Toyota Allion</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default toyotaHome
