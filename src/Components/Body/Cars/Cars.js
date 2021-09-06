import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { selectedCar } from '../../../Redux/actionCreators';
import './stylesheet/Cars.css';

const mapStateToProps = (State) => {
    return {
        carDetails: State.carDetails,
        car: State.selectedCar,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectedCar: (car) => dispatch(selectedCar(car)),
    }
}

class Cars extends Component {
    handleOnClick = (car) => {
        this.props.selectedCar(car);
    }

    render() {
        return (
            <div className="cars">
                <img
                    onClick={() => this.handleOnClick()}
                    src={this.props.Image}
                    alt="" />
                <div className="cars_info">
                    <div className="cars_infoTop">
                        <h3>{this.props.Name}</h3>
                        <p>____</p>
                        <p>audi car description</p>
                    </div>
                    <div className="cars_infoBottom">
                        <div className="cars_price">
                            <h2>Price: BDT {this.props.Price}</h2>
                        </div>
                        <Button href="/carDetails" onClick={() => this.handleOnClick(this.props)}>View Details</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
