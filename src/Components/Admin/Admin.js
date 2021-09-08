import React from 'react';
import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './styleSheet/Admin.css';

function Admin() {
    return (
        <div className="background">
            <Row>
                <Col>
                    <Card className="card_section">
                        <CardImg top width="100%" src="Images/adminCars.svg" alt="Card image cap" />
                        <CardBody className="cardBody_section">
                            <CardTitle tag="h5">Car Collections</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Total number of cars in stock</CardSubtitle>
                            <Button href="/totalCars">Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_section">
                        <CardImg top width="100%" src="Images/adminCustomers.svg" alt="Card image cap" />
                        <CardBody className="cardBody_section">
                            <CardTitle tag="h5">Customers</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Total number of customers</CardSubtitle>
                            <Button href="/customers">Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="card_section">
                        <CardImg top width="100%" src="Images/adminPayment.svg" alt="Card image cap" />
                        <CardBody className="cardBody_section">
                            <CardTitle tag="h5">Invoice Information</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Payment Information</CardSubtitle>
                            <Button href="/invoice">Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Admin
