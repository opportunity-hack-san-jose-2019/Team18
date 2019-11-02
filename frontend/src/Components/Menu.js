import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Signup from './Signup';
import Login from './Login';

class Menu extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={LandingPage}></Route>
                    <Route path='/signup' component={Signup}></Route>
                    <Route path='/login' component={Login}></Route>
                </Switch>
            </div>
        );
    }
}

export default Menu;