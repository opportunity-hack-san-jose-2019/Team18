import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class Login extends Component {

        constructor(props) {
            super(props);
            AOS.init(); 
            this.state = {
                role:"",
                email:"",
                password:"",
                renderRedirect:false
            }
        }

        handleClick = (e) => {
            e.preventDefault();

            

            console.log(this.state);
            const data = this.state;
    
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:3001/login', data)
                .then(response => {
                    if (response.status === 200) {
                        alert("login successfull !");
                        console.log("login successful, data inserted");
                        localStorage.setItem('email', this.state.email);
                        this.setState({
                            renderRedirect:<Redirect to='/' />
                        })
                    }
                })
                .catch((error) => {
                    alert("Email already exists or something went wrong !!");
                    this.setState({
                        redirectVar:<Redirect to='/' />
                    })
                    console.log("Response status : ", error.response, "Response : ", error.response);
                })
            
        }

        handleChange = (e) => {
            this.setState({
                //square brackets must
                [e.target.name]: e.target.value
            })
        }

    render() {
        return (
            <div>
                <Navbar/>
                { this.state.renderRedirect}
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className="">LOGIN HERE</h5>
                            {/* <h3>Please select your role</h3> */}
                            
                            <form className="marginTop">
                            <div className="myInputDiv">
                                <select name="role" onChange={this.handleChange.bind(this)} class=" myInput col-sm-12">
                                    <option selected>Role</option>
                                        <option className="myInput col-sm-12" value="Student">Student</option>
                                        <option className="myInput col-sm-12" value="Volunteer">Volunteer</option>
                                        <option className="myInput col-sm-12" value="Administrator">Administrator</option>
                                    </select>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" onChange={this.handleChange.bind(this)} name="email" type="text" placeholder="Email"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" onChange={this.handleChange.bind(this)} name="password" type="password" placeholder="Password"></input>
                                </div>
                                <div className="myInputDiv marginTop50">
                                    <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-outline-dark myPinkButton col-sm-12"><b>SIGN IN</b></button>
                                </div>
                            </form>
                        </center>
                    </div>
                </div>
                <div className="footer" id="footer">
                    <center>
                        <div className="row container">
                            <div className="col-sm-4 marginTop30">
                                <span><i class=""></i></span>
                                <h6 className="marginTop30"></h6>
                                <label></label>
                            </div>
                            <div className="col-sm-4 marginTop30">
                                <span><i class=""></i></span>
                                <h6 className="marginTop30"></h6>
                                <label></label>
                            </div>
                            <div className="col-sm-4 marginTop30">
                                <span><i class=""></i></span>
                                <h6 className="marginTop30"></h6>
                                <label></label>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}

export default Login;