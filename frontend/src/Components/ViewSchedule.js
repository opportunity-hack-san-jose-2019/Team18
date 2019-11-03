import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class ViewSchedule extends Component {
    constructor(props){
        super(props)
        this.state = {
            studentname:'',
            volunteername: '',
            slot: 1,
            starttime: '',
            final:[]
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        // const data = {...this.state};
        // console.log("data", data);
        axios.defaults.withCredentials = true;
        //get subdomains list from checkboxecs
        // var temp = this.state.options;
        // var subdomains = temp.join(",") + ","
        // alert(subdomains)
        // data['subdomain'] = subdomains
        if (localStorage.getItem('email')){
            axios.post('http://localhost:3001/sendalerts')
            .then(response => {
                if (response.status === 200) {
                    alert("Sending Alerts successfull !");
                    console.log("Alerts sent to the User");
                }
            })
            .catch((error) => {
                alert("Alert Sent");
                console.log("Response status : ", error.response, "Response : ", error.response);
            })
        }
        
        else{
            alert('Something is wrong, Alerts not sent')
        }
    }

    componentDidMount = () => {
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/viewschedule')
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    if(response.data.length > 0){
                        this.setState({
                            final: response.data
                        })
                    }else{
                        alert("No Data");
                    }
                }
            })
            .catch((error) => {
                alert("Error in Fields and Subfields retrieval !!");
                console.log("Response status : "+error+" ,,,,,,,,,,"+ error.response, "Response : ", error.response);
            })

    }

    render() {

        var complete_schedules;
        if (this.state.final.length > 0){
        console.log(this.state.final)
        complete_schedules = this.state.final.map((schedule, index) => {
                return (
                    <tr>
                        <td>{schedule.studentname}</td>
                        <td>{schedule.interviewname}</td>
                        <td>{schedule.slot}</td>
                        <td>{schedule.starttime}</td>
                    </tr>
                )
        })
        }

        return (
            <div>
                <Navbar/>
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className="">EVENTS SCHEDULES</h5>
                            {/* <h3>Please select your role</h3> */}
                            <button type="button" onClick={this.handleClick.bind(this)} className="btn btn-outline-dark myPinkButton col-sm-12"><b>Alert Users</b></button>
                            <form className="marginTop">
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                    <th scope="col">STUDENT NAME</th>
                                    <th scope="col">INTERVIEWER NAME</th>
                                    <th scope="col">SLOT</th>
                                    <th scope="col">START TIME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {complete_schedules}
                                </tbody>
                                </table>
                            </form>
                        </center>
                    </div>
                </div>                
            </div>
        );
    }
}

export default ViewSchedule;