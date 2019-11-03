import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/landingpage.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#212121' }}>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#education">PORFOLIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">CONTACT</a>
                            </li>
                            <li class="nav-item">
                            <Link to='/login'><a class="nav-link" href="#contact">LOGIN</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/signup'><a class="nav-link" href="#contact">SIGNUP</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;