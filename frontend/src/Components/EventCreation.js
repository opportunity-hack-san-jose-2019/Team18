import React, { Component } from 'react';
import  Navbar from './Navbar';
import DatePicker from "react-datepicker";

class EventCreation extends Component {

    constructor(props){
        super(props)
        this.state = {
            startDate: new Date()
        }
    }
     
    handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className="">Create Event</h5>
                            {/* <h3>Please select your role</h3> */}
                            <form className="marginTop">
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="Name of Event"></input>
                                </div>
                                <div className="myInputDiv">
                                <input className="myInput col-sm-12" type="date" onChange={this.handleChange} />
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="Number" placeholder="Number in Minutes"></input>
                                </div>
                                <div className="myInputDiv marginTop50">
                                    <button type="button" className="btn btn-outline-dark myPinkButton col-sm-12"><b>Create</b></button>
                                </div>
                            </form>
                        </center>
                    </div>
                </div>
            </div>    
        );
    }
}

export default EventCreation;