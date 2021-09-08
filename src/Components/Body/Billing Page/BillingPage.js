import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'reactstrap';
import './styleSheet/BillingPage.css';
import { postInvoiceInfo } from '../../../Redux/actionCreators';

const mapStateToProps = (state) => {
    return {
        customerName: state.customerName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postInvoiceInfo: (carName, carPrice, customerName, date) => dispatch(postInvoiceInfo(carName, carPrice, customerName, date)),
    }
}

class BillingPage extends Component {
    handleOnClick = (carInfo, date) => {
        this.props.postInvoiceInfo(carInfo.Name, carInfo.Price, this.props.customerName, date)
    }

    render() {
        const { state } = this.props.location;

        return (
            <div className="background_image">
                <Row className="info_section">
                    <Col className="description_section">
                        <Table>
                            <thead>
                                <tr className="table_header">
                                    <th>Description</th>
                                    <th>Rate</th>
                                    <th>Quantity</th>
                                    <th>Line Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table_data">
                                    <td>{state[0].Name}</td>
                                    <td>{state[0].Price} BDT</td>
                                    <td>1</td>
                                    <td>{state[0].Price} BDT</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="billing_section">
                        <h4>Amount Due (BDT)</h4>
                        <h1>{state[0].Price} BDT</h1>
                        <br />
                        <h4>Billed To</h4>
                        <h2>{this.props.customerName}</h2>
                        <br />
                        <h4>Date of Issue</h4>
                        <h2>{dateFormat(new Date(), "dddd, mmmm dS, yyyy")}</h2>
                        <Button onClick={() => this.handleOnClick(state[0], dateFormat(new Date(), "dddd, mmmm dS, yyyy"))}>Buy</Button>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingPage);
