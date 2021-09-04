import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home/Home';
import Companies from './Companies/Companies';
import Auth from './Auth/Auth';
import audiHome from './Companies/audiHome/audiHome';
import toyotaHome from './Companies/toyotaHome/toyotaHome';

function Body() {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Auth} />
                <Route path="/companies" exact component={Companies} />
                <Route path="/audiHome" exact component={audiHome} />
                <Route path="/toyotaHome" exact component={toyotaHome} />
                <Redirect to="/home" />
                {/* <Redirect to="/login" /> */}
            </Switch>
        </div>
    )
}

export default Body
