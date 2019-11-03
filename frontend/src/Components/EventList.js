import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class EventList extends Component {

    constructor(props){
        super(props)
        this.state = {
            eventslist:'',
            role:localStorage.getItem("role"),
            eventslist:{}
        }
    }

    componentDidMount = () => {
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/eventlist')
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    if(response.data.length > 0){
                        this.setState({
                            eventslist: response.data
                        })
                    }else{
                        alert("No Events Found")
                    }
                }
            })
            .catch((error) => {
                alert("Error in event creation !!");
                console.log("Response status : ", error.response, "Response : ", error.response);
            })

        // now you have list of all events, check if current user is registered or not.
            
        // get event registration details for students, volunteers
        if(this.state.role == "Student"){
            axios.post('http://localhost:3001/registeredStudentsList')
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    if(response.data.length > 0){
                        var registrationStatus = []
                        
                        for(var i = 0; i < this.state.eventslist; i++){
                            for(var j=0;j < response.data.length;j++){
                                if(this.state.eventslist[i].id == response.data[j].eventid && response.data[j].email == localStorage.getItem("email")){
                                    registrationStatus.push(<button class="btn btn btn-danger">REGISTERED</button>);
                                    break;
                                }
                            }
                            registrationStatus.push(<button class="btn btn btn-danger">REGISTER</button>);
                        }
                        this.setState({
                            ...registrationStatus
                        })
                        // this.setState({
                        //     eventslist : this.state.eventslist["registrationStatus"] = registrationStatus
                        // })
                        console.log("after reg stats",this.state)
                    }else{
                        alert("No Events Found")
                    }
                }
            })
            .catch((error) => {
                alert("Error in getting student registration details !!");
                console.log("Response status : ", error.response, "Response : ", error.response);
            })
        }
        if(this.state.role == "Volunteer") {
            axios.post('http://localhost:3001/registeredVolunteersList')
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    if(response.data.length > 0){
                        var registrationStatus = []
                        
                        for(var i = 0; i < this.state.eventslist; i++){
                            for(var j=0;j < response.data.length;j++){
                                if(this.state.eventslist[i].id == response.data[j].eventid && response.data[j].email == localStorage.getItem("email")){
                                    registrationStatus.push(<button class="btn btn btn-danger">REGISTERED</button>);
                                    break;
                                }
                            }
                            registrationStatus.push(<button class="btn btn btn-danger">REGISTER</button>);
                        }
                        this.setState({
                            ...registrationStatus
                        })
                    }else{
                        alert("No Events Found")
                    }
                }
            })
            .catch((error) => {
                alert("Error in getting volunteer registration details !!");
                console.log("Response status : ", error.response, "Response : ", error.response);
            })
        }
        

    }

    handleClick = (e) => {
        e.preventDefault();
        // console.log(this.state);
        // const data = this.state;

        // axios.defaults.withCredentials = true;
        // axios.post('http://localhost:3001/login', data)
        //     .then(response => {
        //         if (response.status === 200) {
        //             alert("login successfull !");
        //             console.log("login successful, data inserted");
        //             localStorage.setItem('email', this.state.email);
        //             localStorage.setItem('role', this.state.role);
        //             this.setState({
        //                 renderRedirect:<Redirect to='/' />
        //             })
        //         }
        //     })
        //     .catch((error) => {
        //         alert("something went wrong !!");
        //         this.setState({
        //             redirectVar:<Redirect to='/' />
        //         })
        //         console.log("Response status : ", error.response, "Response : ", error.response);
        //     })
        
    }

    handleChange = (e) => {
        this.setState({
            //square brackets must
            [e.target.name]: e.target.value
        })
    }

    render() {
        var events = "";
        var registerButton = ""
        if(this.state.role == "Administrator"){
            registerButton = (<td></td>)
        }

        console.log("Registration Status",this.state.registrationStatus)
        if (this.state.eventslist.length > 0) {
            events = this.state.eventslist.map((event, index) => {
                return (
                    <tr>
                        <td>{event.id}</td>
                        <td>{event.eventname}</td>
                        <td>{event.startdate.substring(0, 10)}</td>
                        <td>{event.enddate.substring(0, 10)}</td>
                        <td>{event.slotduration}</td>
                        <td>{event.breaktime}</td>
                        {this.state.role == "Administrator" ? (<td></td>):(this.state.registrationStatus && this.state.registrationStatus[index] ? (<td>{this.state.registrationStatus[index]}</td>) : (<button class="btn btn btn-danger">REGISTER</button>))}
                        {/* {registerButton} */}
                    </tr>
                )
            })
        }
        return (
            <div>
                <Navbar></Navbar>
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className="">EVENTS SCHEDULES</h5>
                            {/* <h3>Please select your role</h3> */}
                            
                            <form className="marginTop">
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">EVENT ID</th>
                                    <th scope="col">EVENT NAME</th>
                                    <th scope="col">START DATE</th>
                                    <th scope="col">END DATE</th>
                                    <th scope="col">INTERVIEW DURATION</th>
                                    <th scope="col">BREAK DURATION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events}
                                </tbody>
                                </table>
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

export default EventList;