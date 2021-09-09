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

        console.log(selectedCar);

        return (
            <div className="background_section">
                <Row>
                    <Col>
                        {/* Carosoul section */}
                        <Carousel className="carousel-section">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={selectedCar[0].Image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={selectedCar[0].Image}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
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
                                <Button
                                    color="secondary"
                                    size="lg"
                                    style={{ width: "200px",height: "50px", marginLeft: "15rem", marginBottom: "2rem"}}>
                                    Get Yours Now
                                </Button>
                            </Link>
                            <p>{selectedCar[0].description1}</p>
                            <br />
                            <p>{selectedCar[0].description2}</p>
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
                                    <td>{selectedCar[0].engineType}</td>
                                </tr>
                                <tr>
                                    <td>Max. power output in kW (hp) / at rpm</td>
                                    <td>{selectedCar[0].maxPowerOutput}</td>
                                </tr>
                                <tr>
                                    <td>Displacement in cc / bore x stroke in mm / compression	</td>
                                    <td>	{selectedCar[0].displacement}</td>
                                </tr>
                                <tr>
                                    <td>Max. torque in Nm (lb-ft) / at rpm</td>
                                    <td>{selectedCar[0].maxTorque}</td>
                                </tr>
                                <tr>
                                    <td>Top speed in km/h (mph)</td>
                                    <td>{selectedCar[0].topSpeed}</td>
                                </tr>
                                <tr>
                                    <td>Acceleration, 0-100 km/h (0-62.1 mph) in sec</td>
                                    <td>{selectedCar[0].acceleration}</td>
                                </tr>
                                <tr>
                                    <td>CNG consumption in kg/100 km</td>
                                    <td>{selectedCar[0].CNGconsumption}</td>
                                </tr>
                                <tr>
                                    <td>Combined CO2-emissions in g/km (CNG)</td>
                                    <td>{selectedCar[0].combinedCO2Emissions}</td>
                                </tr>
                                <tr>
                                    <td>Unladen weight according to EU (excluding driver) / (including driver) / gross weight limit in kg (lb)</td>
                                    <td>{selectedCar[0].unladenWeight}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        {/* top youtube section */}
                        <div className="iframe-container">
                            <iframe src={selectedCar[0].youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)
