import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Car } from '../../../Redux/actionCreators';
import './styleSheet/TotalCars.css';
import { Button } from 'reactstrap';
import { deleteCar } from '../../../Redux/adminActionCreator';

const mapDispatchToProps = (dispatch) => {
    return {
        Car: () => dispatch(Car()),
        deleteCar: (id) => dispatch(deleteCar(id)),
    }
}

const mapStateToProps = (state) => {
    return ({
        carCollection: state.carCollection,
    })
}

class totalCars extends Component {
    componentDidMount() {
        this.props.Car();
    }

    handleOnClick = (id) => {
        // console.log(id);
        this.props.deleteCar(id);
        window.location.reload();
    }

    render() {
        let car = null;

        // console.log(this.props.cars);

        car = this.props.carCollection.map((item) => {
            return (
                <tbody>
                    <tr className="car_row">
                        <td>{item.Name}</td>
                        <td>{item.Price}</td>
                        <td>{item.Brand}</td>
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
                            <th>Price</th>
                            <th>Brand</th>
                        </tr>
                    </thead>
                    {car}
                </Table>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(totalCars)
