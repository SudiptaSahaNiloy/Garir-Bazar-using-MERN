import React from 'react';
import "./Style/Home.css";


function Home() {
    return (
        <div>
            {/* Jumbotron Section starts */}
            <div className="jumbotron">
                <img src="Images/Banner.jpg" alt="" />
                <h1>Welcome To Garir Bazar</h1>
                <p>Find you next match</p>
                {/* <a class="btn btn-primary" href="#" role="button">Learn more</a> */}
            </div>
            {/* Jumbotron section ends */}

            {/* Carosoul sections starts */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="Images/Carosoul_1.jpg" className="d-block w-100" alt="Car1" />
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Carosoul_2.jpg" className="d-block w-100" alt="Car2" />
                    </div>
                    <div className="carousel-item">
                        <img src="Images/Carosoul_3.jpg" className="d-block w-100" alt="Car3" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Carosoul sections ends */}
        </div>
    )
}

export default Home;
