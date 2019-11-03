import React, { Component } from 'react';
import Navbar from './Navbar';

class StudentRegistration extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className=""> STUDENT REGISTRATION </h5>
                            <form className="marginTop">
                                
                            
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="Full Name"></input>
                                </div>
                                <div className="myInputDiv">
                                    <select class=" myInput col-sm-12">
                                        <option selected>Select Interested Field</option>
                                        <option value="Accounting">Accounting</option>
                                        <option value="Aerospace">Aerospace</option>
                                        <option value="Environmental Studies">Environmental Studies</option>
                                        <option value="Biomedical Engineering">Biomedical Engineering</option>
                                        <option value="Chemical Engineering">Chemical Engineering</option>
                                        <option value="Industrial Engineering">Industrial Engineering</option>
                                        <option value="Computer Hardware">AccComputer Hardwareounting</option>
                                        <option value="Computer Hardware Engineering">Computer Hardware Engineering</option>
                                        <option value="Civil Engineering">Civil Engineering</option>
                                        <option value="Electrical Engineering">Electrical Engineering</option>
                                        <option value="Biotechnology">Biotechnology</option>
                                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Computer Engineering">AccComputer Engineeringounting</option>
                                    </select>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="Mobile Number"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="LinkedIn Url"></input>
                                </div>
                                <div className="myInputDiv">
                                    <textarea className="myTextArea col-sm-12" rows="6" placeholder="Short description about you."></textarea>
                                </div>
                                <div className="myInputDiv">
                                    <textarea className="myTextArea col-sm-12" rows="6" placeholder="Future goals and asipirations"></textarea>
                                </div>
                                <div className="myInputDiv marginTop30">
                                    <button type="button" className="btn btn-outline-dark myPinkButton col-sm-12"><b>SUBMIT FORM</b></button>
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
                Name
                skillset
                other
                Phone Number
                About You
                Linkedin
                Submit


            </div>
        );
    }
}

export default StudentRegistration;