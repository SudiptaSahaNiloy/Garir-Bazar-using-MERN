import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheet/Companies.css'
import Button from 'react-bootstrap/Button' 
import Carousel from 'react-bootstrap/Carousel'




function Companies() {
    return (

    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp1861755.jpg"
      alt="Audi"
    />
    <Carousel.Caption className="Caption" >
            <h1>WELCOME TO OUR AUDI COLLECTION</h1>
            <p>Lets take a ride</p>
            <Button href="#" className="button" variant="primary" size="lg">Ride With AUDI</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://wallpapercave.com/wp/wp8503921.jpg"
      alt="Toyota"
    />
    <Carousel.Caption className="Caption">
            <h1>WELCOME TO OUR TOYOTA COLLECTION</h1>
            <p>Lets take a ride</p>
            <Button href="#" className="button" variant="primary" size="lg">Ride With Toyota</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        
    )
}

export default Companies;
