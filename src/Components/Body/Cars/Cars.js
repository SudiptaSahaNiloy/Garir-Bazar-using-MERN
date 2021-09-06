import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { selectedCar } from '../../../Redux/actionCreators';
import './stylesheet/Cars.css';

const mapStateToProps = (State) => {
    return {
        carDetails: State.carDetails,
        wantedCar: State.selectedCar,
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
        // console.log(this.props.wantedCar);
        return (
            <div className="cars">
                <img
                    onClick={() => this.handleOnClick(this.props)}
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
                        <Link
                            to={{
                                pathname: "/carDetails",
                                state: [{ id: this.props.id, Name: this.props.Name, Image: this.props.Image}] // your data array of objects
                            }}
                        >
                            <Button>View Details</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
