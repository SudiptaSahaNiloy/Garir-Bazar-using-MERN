import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './stylesheet/Cars.css';

class Cars extends Component {
    render() {
        return (
            <div className="cars">
                <img
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
                        <Button href="/carDetails">View Details</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cars
