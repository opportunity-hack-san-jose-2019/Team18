import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class VolunteerRegistration extends Component {
    constructor(props){
        super(props)
        this.state = {
            index : 0,
            fieldsubfield:'',
            fields:'',
            subfields:'',
            subcategories: [],
            interestedfields:"",
            interestedSubFields:[],
            options:[],
            eventid: localStorage.getItem('eventid'),
            email: localStorage.getItem('email')
        }
    }

    handleChange = (e) => {
        this.setState({
            //square brackets must
            [e.target.name]: e.target.value
        })
        console.log(this.state)

    }
    handleCheckbox = (e)=>{

        const options = this.state.options
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }

    // update the state with the new array of options
    this.setState({ options: options })

          console.log(this.state)
    }

    handleClick = (e) => {
        e.preventDefault();
        const data = {...this.state};
        console.log("data", data);
        axios.defaults.withCredentials = true;
        //get subdomains list from checkboxecs
        var temp = this.state.options;
        var subdomains = temp.join(",") + ","
        alert(subdomains)
        data['subdomain'] = subdomains
        if (this.state.eventid && localStorage.getItem('email') && this.state.fullname && this.state.interestedfields && this.state.subfields && this.state.mobilenumber){
            axios.post('http://localhost:3001/volunteerregistration', data)
            .then(response => {
                if (response.status === 200) {
                    alert("Volunteer Registration successfull !");
                    console.log("Volunteer Registration successfull, data inserted");
                }
            })
            .catch((error) => {
                alert("Error in Volunteer Registration !!");
                console.log("Response status : ", error.response, "Response : ", error.response);
            })
        }
        else{
            alert('Some details are missing in Volunteer Registration fields')
        }
    }

    componentDidMount = () => {
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/fieldsandsubfields')
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    if(response.data.length > 0){
                        this.setState({
                            fieldsubfield: response.data
                        })
                        console.log("response",this.state.fieldsubfield)
                        var fields = []
                        var subfields = []
                        response.data.map((item,index)=>{
                            fields.push(item.mainfield)
                            subfields.push(item.subfield)
                        })
                        console.log(fields,subfields)
                        this.setState({
                            fields: fields,
                            subfields : subfields
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
        var fields = '';
        var subfields = '';
        if (this.state.fields.length > 0){
        console.log(this.state.fields)
        fields = this.state.fields.map((field, index) => {
                return (
                    <option value= {field} >{field}</option>
                )
        })
        }
        console.log("index",this.state.index)
        if (1){
            console.log(this.state.interestedfields)
            if(this.state.interestedfields && this.state.fieldsubfield){
                // var temp = this.state.fieldsubfield[this.state.interestedfields]
                // console.log(temp)
                var items;
                this.state.fieldsubfield.map((item,index)=>{
                    if(item.mainfield == this.state.interestedfields){
                        items = item.subfield.split(",")
                        items.pop()
                        console.log(items)
                    }
                })
                var interestedSubFields=""
                interestedSubFields = items.map((subfield, index) => {
                    return (
                        <div>
                        <input type="checkbox" onChange={this.handleCheckbox.bind(this)} name="subfield"  value={subfield}></input>{subfield}
                        </div>
                    )
                })
            }
            
        }

        return (
            <div>
                <Navbar></Navbar>
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className=""> VOLUNTEER REGISTRATION </h5>
                            <form className="marginTop">
                                <div className="myInputDiv">
                                    <input name = 'fullname' className="myInput col-sm-12" type="text" onChange={this.handleChange.bind(this)} placeholder="Full Name"></input>
                                </div>
                                <div className="myInputDiv">
                                    <select name = 'interestedfields' onChange={this.handleChange.bind(this)} class=" myInput col-sm-12">
                                        <option selected>Select Interested Field</option>
                                        {fields}
                                        {/* <option value="Accounting">Accounting</option>
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
                                        <option value="Computer Engineering">AccComputer Engineeringounting</option> */}
                                    </select>
                                </div>
                                <div className="myInputDiv">
                                    <div>
                                        {interestedSubFields}
                                    </div>
                                        
                                </div>
                                <div className="myInputDiv">
                                    <input  name = 'mobilenumber' className="myInput col-sm-12" type="text" onChange={this.handleChange.bind(this)} placeholder="Mobile Number"></input>
                                </div>
                                <div className="myInputDiv marginTop30">
                                    <button type="button" className="btn btn-outline-dark myPinkButton col-sm-12" onClick = {this.handleClick.bind(this)}><b>SUBMIT FORM</b></button>
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

export default VolunteerRegistration;