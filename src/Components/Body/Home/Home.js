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
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div class="carousel-item active">
                        <img src="Images/Carosoul_1.jpg" class="d-block w-100" alt="Car1" />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/Carosoul_2.jpg" class="d-block w-100" alt="Car2" />
                    </div>
                    <div class="carousel-item">
                        <img src="Images/Carosoul_3.jpg" class="d-block w-100" alt="Car3" />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* Carosoul sections ends */}
        </div>
    )
}

export default Home;
