import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Cars from './Cars';
import { Car } from '../../../Redux/actionCreators';
import './stylesheet/CarCollection.css';

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

class CarCollection extends Component {
    componentDidMount() {
        this.props.Car();
    }

    render() {
        const { state } = this.props.location;

        let brandedCarStock = null;
        let brandedCars = null;

        brandedCars = this.props.totalCars.filter((item) => {
            return state[0].Brand === item.Brand;
        })

        brandedCarStock = brandedCars.map((item) => {
            return (
                <Cars
                    id={item.id}
                    key={item.id}
                    Name={item.Name}
                    Price={item.Price}
                    Image={item.Image}
                    dealerName={item.dealerName}
                    dealerPhoneNumber={item.dealerPhoneNumber} />
            )
        })

        return (
            <div>
                {brandedCarStock}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCollection);
