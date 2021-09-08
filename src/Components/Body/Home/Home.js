import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Style/Home.css";


function Home() {
    return (
        <div>
            {/* Jumbotron Section starts */}
            <div className="jumbotron">
                <img src="Images/Banner.jpg" alt="" />
                <h1>Welcome To Garir Bazar</h1>
                <p>Find you next match</p>
            </div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Images/Carosoul_1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Images/Carosoul_2.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Images/Carosoul_3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;
