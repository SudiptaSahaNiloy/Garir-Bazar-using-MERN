import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home/Home';
import Companies from './Companies/Companies';
import Auth from './Auth/Auth';

function Body() {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Auth} />
                <Route path="/companies" exact component={Companies} />
                <Redirect to="/home" />
                {/* <Redirect to="/login" /> */}
            </Switch>
        </div>
    )
}

export default Body
