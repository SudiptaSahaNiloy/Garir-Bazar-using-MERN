import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home/Home';
import Companies from './Companies/Companies';
import Auth from './Auth/Auth';
import CarDetails from './CarDetails/CarDetails.js';
import CarCollection from './Cars/CarCollection';
import BillingPage from './Billing Page/BillingPage';

function Body() {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Auth} />
                <Route path="/companies" exact component={Companies} />
                <Route path="/billingPage" exact component={BillingPage} />
                <Route path="/carDetails" exact component={CarDetails} />
                <Route path="/carCollection" exact component={CarCollection} />
                <Redirect to="/home" />
                {/* <Redirect to="/login" /> */}
            </Switch>
        </div>
    )
}

export default Body
