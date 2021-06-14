import {Component} from "react";
import avi from "../img/headshot.jpg";

class About extends Component {
    render(){
        return (
            <div>
                <section id="about" className="section section-light">
                    <div className="container">
                        <div className="inner">
                            <h2>
                                About
                            </h2>
                            <br />
                            <p>
                                My name is Mhairi MacPherson and I am a fully qualified
                                Foot Healthcare Professional graduated from the SMAE Institute.
                            </p>
                            <br />
                            <p>
                                I aim to provide a friendly, caring and professional
                                footcare service, carried out in the comfort of your
                                own home and at a time suitable to you.
                                A full foot health assessment will be completed at
                                your first appointment and any further appointments
                                will be tailored according to your needs.
                            </p>
                            <br />
                            <p>
                                To book your first appointment, <a style={{margin: "0px", padding:"0px", display:"inline", textDecoration: "underline"}} className="nav-link" href="#contact">contact</a> me directly on Facebook or via email or mobile.
                            </p>

                            <br />
                            <img id="avi" src={avi} alt={"Mhairi MacPherson"} />
                            <div id="av">
                                <p>Mhairi MacPherson
                                    <br />
                                    <em>Dip FHP MCFHP MAFHP</em>
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

export default About;