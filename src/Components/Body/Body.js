import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home/Home';
import Login from './Auth/Login/Login'

function Body() {
    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Redirect to="/home" />
                {/* <Redirect to="/login" /> */}
            </Switch>
        </div>
    )
}

export default Body
