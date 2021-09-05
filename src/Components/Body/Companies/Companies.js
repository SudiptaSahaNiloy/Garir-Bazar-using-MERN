import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheet/Companies.css'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

function Companies() {

  return (
    <Carousel className="carousel-fade">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/audiHome.webp"
          alt="Audi"
        />
        <Carousel.Caption className="Caption" >
          <h1>WELCOME TO OUR AUDI COLLECTION</h1>
          <p>Lets take a ride</p>
          <Button href="/audiHome" className="button" variant="primary" size="lg">Ride With AUDI</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/toyotaHome.jpg"
          alt="Toyota"
        />
        <Carousel.Caption className="Caption">
          <h1>WELCOME TO OUR TOYOTA COLLECTION</h1>
          <p>Lets take a ride</p>
          <Button href="/toyotaHome" className="button" variant="primary" size="lg">Ride With Toyota</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default Companies;
