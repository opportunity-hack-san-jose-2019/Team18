import React, { Component } from 'react';
import  Navbar from './Navbar';
import '../css/landingpage.css';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class AdminPortal extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
            </div>
        );
    }
}

export default AdminPortal;