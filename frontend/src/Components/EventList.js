import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class EventList extends Component {

    constructor(props){
        super(props)
        this.state = {
            eventslist:'',
        }
    }

    componentDidMount = () => {
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/eventlist')
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    if(response.data){
                        this.setState({
                            eventslist: response.data
                        })
                    }
                }
            })
            .catch((error) => {
                alert("Error in event creation !!");
                console.log("Response status : ", error.response, "Response : ", error.response);
            })

    }

    render() {
        return (
            <div>
                <Navbar></Navbar>


            </div>
        );
    }
}

export default EventList;