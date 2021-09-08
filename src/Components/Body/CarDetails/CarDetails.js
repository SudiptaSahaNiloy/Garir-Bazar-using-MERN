import React from 'react';
import './stylesheet/CarDetails.css';
import { Carousel, Table } from 'react-bootstrap';
import { Button, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Car } from '../../../Redux/actionCreators';
import { Link } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        Car: () => dispatch(Car()),
    }
}

const mapStateToProps = (State) => {
    return {
        totalCars: State.carCollection,
    }
}

class CarDetails extends Component {
    componentDidMount() {
        this.props.Car();
    }
    render() {
        const { state } = this.props.location;

        let selectedCar = null;

        selectedCar = this.props.totalCars.filter((item) => {
            return item.id === state[0].id
        })

        // console.log(selectedCar[0]);
        return (
            <div className="background_section">
                <Row>
                    <Col>
                        {/* Carosoul section */}
                        <Carousel className="carousel-section">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="Images/audi1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="Images/audi2.jpg"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            {/* <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="Images/audi3.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                        </Carousel>
                    </Col>
                    <Col>
                        {/* Car Name Section */}
                        <div className="carName_Section">
                            <h1>{selectedCar[0].Name}</h1>
                            <h2>Price: BDT {selectedCar[0].Price} </h2>
                            <Link
                                to={{
                                    pathname: "/billingPage",
                                    state: [{ Id: selectedCar[0].id, Name: selectedCar[0].Name, Price: selectedCar[0].Price }]
                                }}>
                                <Button className="button" variant="primary" size="lg">Get Yours Now</Button>
                            </Link>
                            <p>Audi natural gas models combine ecology and economy: The Audi A4 Avant g-tron and A5 Sportback g-tron feature a new, sporty design and a state-of-the-art touch operating concept.</p>
                            <br />
                            <p>Audi A4 Avant g-tron: CNG consumption in kg/100 km: 4.1 -3.9; combined CO2 emissions in g/km (CNG): 113-105 Information on fuel/electricity consumption and CO2 emissions in ranges depending on the used combination of wheels/tires</p>
                        </div>
                    </Col>
                </Row>

                <Row className="carInfo_section">
                    <Col>
                        {/* Table section  */}
                        <div className="table_section">
                            <h1>Technical feature</h1>
                            <p>Audi A4 Avant g-tron 40 g-tron S tronic (125 kW)</p>
                        </div>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>Engine type</td>
                                    <td>Inline 4-cylinder engine</td>
                                </tr>
                                <tr>
                                    <td>Max. power output in kW (hp) / at rpm</td>
                                    <td>125 (170) / 4450 - 6000</td>
                                </tr>
                                <tr>
                                    <td>Displacement in cc / bore x stroke in mm / compression	</td>
                                    <td>	1984 / 82.5 x 92.8 / 12.6</td>
                                </tr>
                                <tr>
                                    <td>Max. torque in Nm (lb-ft) / at rpm</td>
                                    <td>270 (199.1) / 1650 - 4400</td>
                                </tr>
                                <tr>
                                    <td>Top speed in km/h (mph)</td>
                                    <td>210 (130.5)</td>
                                </tr>
                                <tr>
                                    <td>Acceleration, 0-100 km/h (0-62.1 mph) in sec</td>
                                    <td>8.4</td>
                                </tr>
                                <tr>
                                    <td>CNG consumption in kg/100 km</td>
                                    <td>4.1 - 3.9</td>
                                </tr>
                                <tr>
                                    <td>Combined CO2-emissions in g/km (CNG)</td>
                                    <td>111 - 105</td>
                                </tr>
                                <tr>
                                    <td>Unladen weight according to EU (excluding driver) / (including driver) / gross weight limit in kg (lb)</td>
                                    <td>1590 (3505.3) / 1665 (3670.7) / 2140 (4717.9)</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        {/* top youtube section */}
                        <div className="iframe-container">
                            <iframe src="https://www.youtube.com/embed/hQwtBeAgBKA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)
