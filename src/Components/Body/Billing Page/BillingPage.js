import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Row, Col, Button, Alert } from 'reactstrap';
import './styleSheet/BillingPage.css';
import { postInvoiceInfo } from '../../../Redux/actionCreators';
import { getInvoice } from '../../../Redux/adminActionCreator';

const mapStateToProps = (state) => {
    return {
        customerName: state.customerName,
        invoice: state.invoice,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postInvoiceInfo: (carName, carPrice, customerName, date) => dispatch(postInvoiceInfo(carName, carPrice, customerName, date)),
        getInvoice: () => dispatch(getInvoice(),)
    }
}

class BillingPage extends Component {
    state = {
        bookingComplete: false,
    }

    handleOnClick = (carInfo, date, Price) => {
        this.props.getInvoice();
        this.props.postInvoiceInfo(carInfo.Name, Price, this.props.customerName, date);
        this.setState({
            bookingComplete: !this.state.bookingComplete,
        })
    }

    render() {
        const { state } = this.props.location;

        const alertMsg = <Alert color="success">Your Car has been Booked. Thanks for staying with us</Alert >

        let oldCustomer = null;

        oldCustomer = this.props.invoice.filter((item) => {
            return item.customerName === this.props.customerName
        })

        let discount = 0.2;
        let discountedPrice = null;

        if (oldCustomer.length === 0) {
            discountedPrice = state[0].Price;
        } else {
            discountedPrice = state[0].Price - (state[0].Price * discount);
        }

        return (
            <div className="background_image">
                <Row className="info_section">
                    {this.state.bookingComplete ? alertMsg : null}
                    <Col className="description_section">
                        <Table>
                            <thead>
                                <tr className="table_header">
                                    <th>Description</th>
                                    <th>Rate</th>
                                    <th>Quantity</th>
                                    <th>{oldCustomer.length !== 0 ? "Discount" : null}</th>
                                    <th>Line Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table_data">
                                    <td>{state[0].Name}</td>
                                    <td>{state[0].Price} BDT</td>
                                    <td>1</td>
                                    <td>{oldCustomer.length !== 0 ? "20%" : null}</td>
                                    <td>{discountedPrice} BDT</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="billing_section">
                        <h4>Amount Due (BDT)</h4>
                        <h1>{discountedPrice} BDT</h1>
                        <br />
                        <h4>Billed To</h4>
                        <h2>{this.props.customerName}</h2>
                        <br />
                        <h4>Date of Issue</h4>
                        <h2>{dateFormat(new Date(), "dddd, mmmm dS, yyyy")}</h2>
                        <Button onClick={() => this.handleOnClick(state[0], dateFormat(new Date(), "dddd, mmmm dS, yyyy"), discountedPrice.toString())}>Book</Button>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingPage);
