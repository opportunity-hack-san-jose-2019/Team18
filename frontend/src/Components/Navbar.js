import React, { Component } from 'react';
import { Link,Redirect,withRouter } from 'react-router-dom';
import '../css/landingpage.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : "",
            redirectVar:"",
            role:localStorage.getItem("role")        }
    }

    componentDidMount() {
        console.log(this.state.email)
        if(localStorage.getItem("email")){
            this.setState({
                redirectVar : <Link to='/'><a class="nav-link" onClick={this.handleClick.bind(this)} href="">LOGOUT</a></Link>
            })
        }else{
            this.setState({
                redirectVar : <Link to='/login'><a class="nav-link" onClick={this.handleClick.bind(this)} href="">LOGIN</a></Link>
            })
        }
    }

    handleClick = (e) =>{
        e.preventDefault();

        if(localStorage.getItem("email")){ //already logged in.
            localStorage.removeItem("email")
            localStorage.removeItem("role")
            this.setState({
                redirectVar : <Link to='/'><a class="nav-link" onClick={this.handleClick.bind(this)} href="">LOGIN</a></Link>
            })
            window.location.reload();
            // this.props.history.push("/");
        }else{
            this.setState({
                // redirectVar : <Link to='/login'><a class="nav-link" onClick={this.handleClick.bind(this)} href="">LOGIN</a></Link>,
                renderRedirect : <Redirect to="/login"></Redirect>
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.renderRedirect}
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#212121' }}>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link" href="#about">{this.state.role}</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#education">PORFOLIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">CONTACT</a>
                            </li> */}
                        </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    {this.state.redirectVar}
                                    {/* <Link to='/login'><a class="nav-link" href="#contact">LOGIN</a></Link> */}
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