import React, { Component } from 'react';
import VAR from '../Config/Config';
import { Link, Redirect } from 'react-router-dom';
import '../css/landingpage.css';
import Navbar from './Navbar';


//ANIMATIONS
import '../../node_modules/aos/dist/aos.css';
import AOS from 'aos';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        AOS.init(); 
        this.state = {
            email : localStorage.getItem("email"),
            roleInStorage:localStorage.getItem("role"),
            buttons:<div></div>
        }
    }

    componentDidMount = () => {
        // getting based upon on user role.
        if(this.state.roleInStorage=="Student"){
            this.setState({
                buttons: <div>
                    <a href="/eventsList"><button type="button"  class="marginTop marginAll paddingAll btn btn-outline-light rounded-0">Events List</button></a>
                    <a href="/viewSchedule"><button type="button"  class="marginTop marginAll paddingAll btn btn-outline-light rounded-0">View Schedule</button></a>
                </div>
            })
        }else if(this.state.roleInStorage=="Administrator"){
            this.setState({
                buttons: <div>
                    <a href="/eventCreation"><button type="button"  class="marginTop marginAll paddingAll btn btn-outline-light rounded-0">Create Event</button></a>
                            <a href="/schedule"><button type="button"  class="marginTop marginAll paddingAll btn btn-outline-light rounded-0">Make Schedules</button></a>
                            <a href="/adminportal"><button type="button"  class="marginTop marginAll paddingAll btn btn-outline-light rounded-0">send Invites</button></a>
                </div>
            })
        }else if(this.state.roleInStorage=="Volunteer"){
            this.setState({
                buttons: <div>
                    <a href="/eventsList"><button type="button"  class="marginTop marginAll paddingAll btn btn-outline-light rounded-0">Events List</button></a>
                    <a href="/viewSchedule"><button type="button"  class="marginTop marginAll paddingAll btn btn-outline-light rounded-0">View Schedule</button></a>
                </div>
            })
        }else{
            this.setState({
                buttons: <div>
                    
                </div>
            })
        }
    }

    render() {
        return (
            <div className="">
                <Navbar/>
                {/* <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#212121' }}>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#education">PORFOLIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">CONTACT</a>
                            </li>
                            <li class="nav-item">
                            <Link to='/login'><a class="nav-link" href="#contact">LOGIN</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/signup'><a class="nav-link" href="#contact">SIGNUP</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                {/* take parent div, put the elements that has to overlap i.e image and text here. apply relative on parent. */}
                <div id="home" class="bg_div">
                    <center>
                        <div className="container intro">
                            <h1 class="name marginTop">BRAVEN</h1>
                            <label class="tagLine">Leaders emerging from everywhere empowered to excel anywhere</label><br />
                            {this.state.buttons}
                        </div>
                    </center>
                </div>
              {/* <div id="about" className="container">
                    <center>
                        <div class="col-md-8 col-sm-*">
                            <div class="col-md-8 col-sm-* ml-auto">
                                <h5>ABOUT</h5>
                                <h2>Let me introduce myself</h2>
                            </div>
                            <div class="row aboutdesc marginTop30">
                                <div class="col-md-4 col-sm-*">
                                    <img className="profilePic" src={require('../images/profile.jpg')}></img>
                                </div>
                                <div class="col-md-8 col-sm-*">
                                    <p>I am a graduate Computer Engineering student at the San Jose state university and I am passionate about what I learn. I am looking for Software Development internship positions and a few of the aspects I am skilled in is Java Programming, Data structures and Algorithms, C++ Programming, HTML5, CSS3, JS, PHP and MySQL</p>
                                </div>
                            </div>
                            <div  class="row profile marginTop30 text-left">
                                <div data-aos="fade-right" class="col-md-6 col-sm-*">
                                    <h5>PROFILE</h5><br></br>
                                    <label><b>FULLNAME:</b></label>
                                    <p>Ranjith kumar yadav Cheguri</p>
                                    <label><b>BIRTH DATA:</b></label>
                                    <p>SEP 09, 1994</p>
                                    <label><b>CURENTLY ENROLLED IN:</b></label>
                                    <p>MS Software Engineering, San Jose State University</p>
                                    <label><b>WEBSITE:</b></label>
                                    <p>findranjith.com</p>
                                    <label><b>EMAIL:</b></label>
                                    <p>ranjith.cheguri@gmail.com</p>
                                </div>
                                <div data-aos="fade-left" class="col-md-6 col-sm-*">
                                    <h5  className="">SKILLS</h5>
                                    <label className="marginTop30"><b>NODEJS</b></label>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                            <span class="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    <label><b>NODEJS</b></label>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                            <span class="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    <label><b>NODEJS</b></label>
                                    <div class="progress">
                                        <div class="progress-bar " role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                            <span class="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    <label><b>NODEJS</b></label>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                            <span class="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    <label><b>NODEJS</b></label>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                            <span class="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    <label><b>NODEJS</b></label>
                                    <div class="progress">
                                        <div class="progress-bar " role="progressbar" aria-valuenow="70"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
                                            <span class="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hireMe" id="hireMe">
                                <a href="#contact"> <button type="button" data-aos="zoom-in" className="btn btn-outline-light myButton "><b>HIRE ME</b></button></a>
                                <button type="button" data-aos="zoom-in" className="btn btn-outline-dark myButtonInverse"><b>DOWNLOAD CV</b></button>
                            </div>
                        </div>
                    </center>
                </div>
                <div className="education" id="education">
                    <div className="container">
                        <center>
                            <h5 className="">RESUME</h5>
                            <h2>More of my credentials.</h2>
                            <div>
                                <h5 className="marginTop">EDUCATION</h5>
                                <div className="row marginTop">
                                    <div className="col col-sm-4 text-right">
                                        <h3><b>Masters in Software Engineering</b></h3>
                                        <label>Aug 2018-May 2020</label>
                                    </div>
                                    <div className="col col-sm-1">
                                        <div className="paintWhite">
                                            <span><i class="fas fa-graduation-cap"></i></span>
                                        </div>
                                        <div className="verticalLine" width="1" size="500" />
                                    </div>
                                    <div className="col col-sm-7 text-left">
                                        <h3><b>San Jose State University, CA, USA</b></h3>
                                        <b><hr className="float-left horizontalLine" /></b>
                                        <label>Courses Taken: CMPE 180A - Data structures and Algorithms in C++, CMPE 272 - Enterprise Software Platforms, CMPE 206 - Computer Network Design, CMPE 180D - Digital Design</label>
                                    </div>
                                </div>
                                <div className="row marginTop">
                                    <div className="col col-sm-4 text-right">
                                        <h3><b>Bachelors in Computer Science</b></h3>
                                        <label>Aug 2012-May 2016</label>
                                    </div>
                                    <div className="col col-md-1">
                                        <div className="paintWhite">
                                            <span><i class="fas fa-graduation-cap"></i></span>
                                        </div>
                                        <div className="verticalLine" width="1" size="500" />
                                    </div>
                                    <div className="col col-sm-7 text-left">
                                        <h3><b>Osmania University, HYDERABAD, INDIA</b></h3>
                                        <b><hr className="float-left horizontalLine" /></b>
                                        <label>Courses Taken: CMPE 180A - Data structures and Algorithms in C++, CMPE 272 - Enterprise Software Platforms, CMPE 206 - Computer Network Design, CMPE 180D - Digital Design</label>
                                    </div>
                                </div>
                            </div>
                            <div className="marginTop paddingTop">
                                <h5><b>PROJECTS</b></h5>
                                <div className="row marginTop">
                                    <div className="col col-sm-4 text-right">
                                        <h3><b>Masters in Software Engineering</b></h3>
                                        <label>Aug 2018-May 2020</label>
                                    </div>
                                    <div className="col col-sm-1">
                                        <div className="paintWhite">
                                            <span><i class="fas fa-briefcase"></i></span>
                                        </div>
                                        <div className="verticalLine" width="1" size="500" />
                                    </div>
                                    <div className="col col-sm-7 text-left">
                                        <h3><b>San Jose State University, CA, USA</b></h3>
                                        <b><hr className="float-left horizontalLine" /></b>
                                        <label>Courses Taken: CMPE 180A - Data structures and Algorithms in C++, CMPE 272 - Enterprise Software Platforms, CMPE 206 - Computer Network Design, CMPE 180D - Digital Design</label>
                                    </div>
                                </div>
                                <div className="row marginTop">
                                    <div className="col col-sm-4 text-right">
                                        <h3><b>Masters in Software Engineering</b></h3>
                                        <label>Aug 2018-May 2020</label>
                                    </div>
                                    <div className="col col-sm-1">
                                        <div className="paintWhite">
                                            <span><i class="fas fa-briefcase"></i></span>
                                        </div>
                                        <div className="verticalLine" width="1" size="500" />
                                    </div>
                                    <div className="col col-sm-7 text-left">
                                        <h3><b>San Jose State University, CA, USA</b></h3>
                                        <b><hr className="float-left horizontalLine" /></b>
                                        <label>Courses Taken: CMPE 180A - Data structures and Algorithms in C++, CMPE 272 - Enterprise Software Platforms, CMPE 206 - Computer Network Design, CMPE 180D - Digital Design</label>
                                    </div>
                                </div>
                                <div className="row marginTop">
                                    <div className="col col-sm-4 text-right">
                                        <h3><b>Masters in Software Engineering</b></h3>
                                        <label>Aug 2018-May 2020</label>
                                    </div>
                                    <div className="col col-sm-1">
                                        <div className="paintWhite">
                                            <span><i class="fas fa-briefcase"></i></span>
                                        </div>
                                        <div className="verticalLine" width="1" size="500" />
                                    </div>
                                    <div className="col col-sm-7 text-left">
                                        <h3><b>San Jose State University, CA, USA</b></h3>
                                        <b><hr className="float-left horizontalLine" /></b>
                                        <label>Courses Taken: CMPE 180A - Data structures and Algorithms in C++, CMPE 272 - Enterprise Software Platforms, CMPE 206 - Computer Network Design, CMPE 180D - Digital Design</label>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="contact" id="contact">
                    <div className="container">
                        <center>
                            <h5 className="">CONTACT</h5>
                            <h3>I'd Love To Hear From You.</h3>
                            <form className="marginTop">
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="Name"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="Email"></input>
                                </div>
                                <div className="myInputDiv">
                                    <input className="myInput col-sm-12" type="text" placeholder="Subject"></input>
                                </div>
                                <div className="myInputDiv">
                                    <textarea className="myTextArea col-sm-12" rows="6" placeholder="message"></textarea>
                                </div>
                                <div className="myInputDiv marginTop30">
                                    <button type="button" className="btn btn-outline-dark myPinkButton col-sm-12"><b>SUBMIT</b></button>
                                </div>
                            </form>
                        </center>
                    </div>
                </div>
                <div className="footer" id="footer">
                    <center>
                        <div className="row container">
                            <div className="col-sm-4 marginTop30">
                                <span><i class="fal fa-map-marker-alt fa-2x"></i></span>
                                <h6 className="marginTop30">WHERE TO FIND ME</h6>
                                <label>351 Liana way, San Jose, CA, 95126 US</label>
                            </div>
                            <div className="col-sm-4 marginTop30">
                                <span><i class="fal fa-envelope fa-2x"></i></span>
                                <h6 className="marginTop30">EMAIL ME AT</h6>
                                <label>ranjith.cheguri@gmail.com</label>
                            </div>
                            <div className="col-sm-4 marginTop30">
                                <span><i class="fal fa-phone fa-2x  fa-rotate-90"></i></span>
                                <h6 className="marginTop30"><b>CALL ME AT</b></h6>
                                <label>Mobile: (+1)(669) 232 7210</label>
                            </div>
                        </div>
                    </center>
                </div>
                <div class="blackBg">
                    <center>
                        <div className="container text-left">
                            <span><i class="fal fa-paint-brush"></i></span>
                            <label> developed by Ranjith Cheguri</label>
                        </div>
                    </center>
                </div> */}
            </div>
        );
    }
}

export default LandingPage;