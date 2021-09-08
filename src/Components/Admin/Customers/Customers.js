import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCustomers } from '../../../Redux/adminActionCreator';
import './styleSheet/Customers.css'
import { Button } from 'reactstrap';
import { deleteCustomers } from '../../../Redux/adminActionCreator';

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => dispatch(getCustomers()),
        deleteCustomers: (id) => dispatch(deleteCustomers(id)),
    }
}

const mapStateToProps = (state) => {
    return ({
        customers: state.customers,
    })
}

class Customers extends Component {
    componentDidMount() {
        this.props.getCustomers();
    }

    handleOnClick = (id) => {
        // console.log(id);
        this.props.deleteCustomers(id);
        window.location.reload();
    }

    render() {
        let customer = null;

        customer = this.props.customers.map((item) => {
            return (
                <tbody>
                    <tr className="customer_row">
                        <td>{item.Name}</td>
                        <td>{item.Email}</td>
                        <td>{item.CurrentAddress}</td>
                        <td>{item.NID}</td>
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Current Address</th>
                            <th>NID</th>
                        </tr>
                    </thead>
                    {customer}
                </Table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customers)
