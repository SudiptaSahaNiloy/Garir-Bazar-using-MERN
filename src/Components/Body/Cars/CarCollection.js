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
        let brandCars = null;

        brandCars = this.props.totalCars.map((item) => {
            return (
                <Cars id={item.id} key={item.id} Name={item.Name} Price={item.Price} Image={item.Image} />
            )
        })

        return (
            <div>
                {brandCars}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCollection);
