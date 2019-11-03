import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Signup from './Signup';
import Login from './Login';
import  Navbar from './Navbar';
import  EventCreation from './EventCreation';

class Menu extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={LandingPage}></Route>
                    <Route path='/signup' component={Signup}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/CreateEvent' component={EventCreation}></Route>
                </Switch>
            </div>
        );
    }
}

export default Menu;