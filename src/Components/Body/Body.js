import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home/Home';
import Login from './Auth/Login/Login';
import Companies from './Companies/Companies';

function Body() {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/companies" exact component={Companies} />
                <Redirect to="/home" />
                {/* <Redirect to="/login" /> */}
            </Switch>
        </div>
    )
}

export default Body
