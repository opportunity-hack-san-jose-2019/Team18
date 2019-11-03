import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Signup from './Signup';
import Login from './Login';
import  Navbar from './Navbar';
import AdminPortal from './AdminPortal';
import StudentRegistration from './StudentRegistration';
import VolunteerRegistration from './VolunteerRegistration';
import EventCreation from './EventCreation';
import Schedule from './Schedule';
import EventList from './EventList';
import ViewSchedule from './ViewSchedule';
import Graph from './Graph';

class Menu extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={LandingPage}></Route>
                    <Route path='/signup' component={Signup}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/adminportal' component={AdminPortal}></Route>
                    <Route path='/studentRegistration' component={StudentRegistration}></Route>
                    <Route path='/volunteerRegistration' component={VolunteerRegistration}></Route>
                    <Route path='/eventCreation' component={EventCreation}></Route>
                    <Route path='/schedule' component={Schedule}></Route>
                    <Route path='/eventlist' component={EventList}></Route>
                    <Route path="/viewSchedule" component={ViewSchedule}></Route>
                    <Route path="/graph" component={Graph}></Route>
                </Switch>
            </div>
        );
    }
}

export default Menu;