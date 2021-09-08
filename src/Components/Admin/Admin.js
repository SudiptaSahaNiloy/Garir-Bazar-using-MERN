import React from 'react';
import { NavLink} from 'react-router-dom';
import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './styleSheet/Admin.css';

function Admin() {
    return (
        <div className="background">
            <Row style={{ height: "92vh" }}>
                <Col className="cards">
                    <NavLink to="/totalCars">
                        <Card className="card_section">
                            <CardImg style={{ height: "220px" }} top width="100%" src="Images/adminCars.svg" alt="Card image cap" />
                            <CardBody className="cardBody_section border">
                                <CardTitle className="cardBody_section_title" tag="h5">Car Collections</CardTitle>
                                <CardSubtitle tag="h6" className="mb-51 text-muted">Total number of cars in stock</CardSubtitle>
                            </CardBody>
                        </Card>
                    </NavLink>
                </Col>
                <Col className="cards">
                    <NavLink to="/customers">
                        <Card className="card_section">
                            <CardImg top width="100%" src="Images/adminCustomers.svg" alt="Card image cap" />
                            <CardBody className="cardBody_section border">
                                <CardTitle className="cardBody_section_title" tag="h5">Customers</CardTitle>
                                <CardSubtitle tag="h6" className="mb-1 text-muted">Total number of customers</CardSubtitle>
                                {/* <Button href="/customers">Details</Button> */}
                            </CardBody>
                        </Card>
                    </NavLink>
                </Col>
                <Col className="cards">
                    <NavLink to="/invoice">
                        <Card className="card_section">
                            <CardImg top width="100%" src="Images/adminPayment.svg" alt="Card image cap" />
                            <CardBody className="cardBody_section">
                                <CardTitle className="cardBody_section_title" tag="h5">Invoice Information</CardTitle>
                                <CardSubtitle tag="h6" className="mb-1 text-muted">Payment Information</CardSubtitle>
                                {/* <Button href="/invoice">Details</Button> */}
                            </CardBody>
                        </Card>
                    </NavLink>
                </Col>
            </Row>
        </div>
    )
}

export default Admin
