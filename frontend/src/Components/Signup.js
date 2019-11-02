import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className="">SIGN UP HERE</h5>
                            {/* <h3>Please select your role</h3> */}
                            <form className="marginTop">
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="Full Name"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="Email"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="password" placeholder="Password"></input>
                                </div>
                                <div className="myInputDiv marginTop30">
                                    <button type="button" className="btn btn-outline-dark myPinkButton col-sm-12"><b>SIGN UP</b></button>
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