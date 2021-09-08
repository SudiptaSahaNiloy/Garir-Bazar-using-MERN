import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home/Home';
import Companies from './Companies/Companies';
import Auth from './Auth/Auth';
import CarDetails from './CarDetails/CarDetails.js';
import CarCollection from './Cars/CarCollection';
import BillingPage from './Billing Page/BillingPage';
import { Component } from 'react';
import { connect } from 'react-redux';
import Admin from '../Admin/Admin';
import TotalCars from '../Admin/Cars/TotalCars';
import Customers from '../Admin/Customers/Customers';
import Invoice from '../Admin/Invoice/Invoice';

const mapStateToProps = (state) => {
    return {
        customerName: state.customerName,
    }
}

class Body extends Component {
    render() {
        let routes = null;
        
        if (this.props.customerName !== null) {
            if (this.props.customerName === "Admin") {
                routes = (
                    <Switch>
                        <Route path="/totalCars" exact component={TotalCars} />
                        <Route path="/customers" exact component={Customers} />
                        <Route path="/invoice" exact component={Invoice} />
                        <Route path="/admin" exact component={Admin} />
                        <Redirect to="/admin" />
                    </Switch>
                )
            } else {
                routes = (
                    <Switch>
                        <Route path="/companies" exact component={Companies} />
                        <Route path="/billingPage" exact component={BillingPage} />
                        <Route path="/carDetails" exact component={CarDetails} />
                        <Route path="/carCollection" exact component={CarCollection} />
                        <Route path="/home" exact component={Home} />
                        <Redirect to="/home" />
                    </Switch>
                )
            }
        }
        else {
            routes = (
                <Switch>
                    <Route path="/login" exact component={Auth} />
                    {/* <Redirect to="/login" /> */}
                </Switch>
            )
        }
        return (
            <div>
                {routes}
            </div >
        )
    }

}

export default connect(mapStateToProps)(Body)
