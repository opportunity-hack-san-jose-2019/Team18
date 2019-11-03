import React, { Component } from 'react';
import  Navbar from './Navbar';
import DatePicker from "react-datepicker";
import axios from 'axios';

class EventCreation extends Component {

    constructor(props){
        super(props)
        this.state = {
            eventname:'',
            startdate: '',
            enddate: '',
            slotduration:'',
            breaktime:'',
        }
    }
    
    handleChange = (e) => {
        this.setState({
            //square brackets must
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        
        const data = {...this.state};
        console.log("data", data);
        axios.defaults.withCredentials = true;
        if (this.state.eventname && this.state.startdate && this.state.enddate && this.state.slotduration && this.state.breaktime){
            axios.post('http://localhost:3001/eventcreation', data)
            .then(response => {
                if (response.status === 200) {
                    alert("Event Creation successfull !");
                    console.log("Event Creation successful, data inserted");
                }
            })
            .catch((error) => {
                alert("Error in event creation !!");
                console.log("Response status : ", error.response, "Response : ", error.response);
            })
        }
        else{
            alert('Some details are missing in Event Creation')
        }

    }

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
                                    <input name = 'eventname' className="myInput col-sm-12" type="text" onChange={this.handleChange.bind(this)} placeholder="Name of Event"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input name = 'startdate' className="myInput col-sm-12" type="date" onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className="myInputDiv">
                                    <input name = 'enddate' className="myInput col-sm-12" type="date" onChange={this.handleChange.bind(this)} />
                                </div>
                                <div className="myInputDiv">
                                    <input name = 'slotduration' className="myInput col-sm-12" type="Number" onChange={this.handleChange.bind(this)} placeholder="Slot in Minutes"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input name = 'breaktime' className="myInput col-sm-12" type="Number" onChange={this.handleChange.bind(this)} placeholder="Interval in Minutes"></input>
                                </div>
                                <div className="myInputDiv marginTop50">
                                    <button type="button" className="btn btn-outline-dark myPinkButton col-sm-12" onClick={this.handleClick.bind(this)}><b>Create</b></button>
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