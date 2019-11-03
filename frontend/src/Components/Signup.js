import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class Signup extends Component {
    constructor(props) {
        super(props);
        AOS.init(); 
        this.state = {
            role:"",
            fullname:"",
            email:"",
            password:"",
            redirectVar:false
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        
        const data = {...this.state};
        console.log("data", data);
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/signup', data)
            .then(response => {
                if (response.status === 200) {
                    alert("signup successfull !");
                    console.log("signup successful, data inserted");
                    // localStorage.setItem('email', this.state.email);
                    this.setState({
                        redirectVar:<Redirect to='/login' />
                    })
                }
            })
            .catch((error) => {
                alert("Email already exists or something went wrong !!");
                // this.setState({
                //     redirectVar:<Redirect to='/signup' />
                // })
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
                {this.state.redirectVar}
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className="">SIGN UP HERE</h5>
                            {/* <h3>Please select your role</h3> */}
                            <form className="marginTop">
                                <div className="myInputDiv">
                                <select name="role" onChange={this.handleChange.bind(this)}  class=" myInput col-sm-12">
                                    <option selected>Role</option>
                                        <option className="myInput col-sm-12" value="Student">Student</option>
                                        <option className="myInput col-sm-12" value="Volunteer">Volunteer</option>
                                        <option className="myInput col-sm-12" value="Administrator">Administrator</option>
                                    </select>
                                </div>
                            
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" onChange={this.handleChange.bind(this)} type="text" name="fullname" placeholder="Full Name"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" onChange={this.handleChange.bind(this)} type="text" name="email" placeholder="Email"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" onChange={this.handleChange.bind(this)} type="password" name="password" placeholder="Password"></input>
                                </div>
                                <div className="myInputDiv marginTop30">
                                    <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-outline-dark myPinkButton col-sm-12"><b>SIGN UP</b></button>
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

export default Signup;