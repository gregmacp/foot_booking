import {Component} from "react";
import '../App.css';
import {Facebook} from 'react-bootstrap-icons';

class Contact extends Component {

    render() {
        return (
            <div>
                <section id="contact" className="section section-dark">
                    <div className="container">
                        <div className="inner">
                            <h2>Contact</h2>
                            <br />
                            Email:
                            <a href="mailto:info@footcarehighland.co.uk"> info@footcarehighland.co.uk</a>
                            <br />
                            Telephone:
                            <a href="tel:07977204502"> 07977 204 502</a>
                            <br />
                            <a style={{textDecoration: "underline"}} href="https://www.facebook.com/Footcare-Highland-104750697595206/">Facebook</a>
                            <br />
                            <br />

                        </div>
                    </div>

                </section>
            </div>
        );
    }

}

export default Contact;
