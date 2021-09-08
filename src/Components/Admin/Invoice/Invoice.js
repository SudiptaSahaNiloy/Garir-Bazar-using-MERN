import React, { Component } from 'react';
import './styleSheet/Invoice.css';
import { deleteInvoice, getInvoice } from '../../../Redux/adminActionCreator';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const mapDispatchToProps = (dispatch) => {
    return {
        getInvoice: () => dispatch(getInvoice()),
        deleteInvoice: (id) => dispatch(deleteInvoice(id)),
    }
}

const mapStateToProps = (state) => {
    return ({
        invoices: state.invoice,
    })
}

class Invoice extends Component {
    componentDidMount() {
        this.props.getInvoice();
    }

    handleOnClick = (id) => {
        this.props.deleteInvoice(id);
        window.location.reload();
    }

    render() {
        let invoice = null;

        // console.log(this.props.cars);

        invoice = this.props.invoices.map((item) => {
            return (
                <tbody>
                    <tr className="invoice_row">
                        <td>{item.carName}</td>
                        <td>{item.carPrice}</td>
                        <td>{item.customerName}</td>
                        <td>{item.date}</td>
                        <td>
                            <Button onClick={() => this.handleOnClick(item.id)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                </tbody>
            )
        })
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Car Name</th>
                            <th>Car Price</th>
                            <th>Customer Name</th>
                            <th>Date of Issue</th>
                        </tr>
                    </thead>
                    {invoice}
                </Table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
