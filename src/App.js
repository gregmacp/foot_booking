import React, { Component } from 'react';
import './App.css';

import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import BookingModal from "./components/BookingModal";
import PricesModal from "./components/PricesModal";
import Cal from "./components/Cal";
import Masthead from "./components/Masthead";
import moment from 'moment';

import { Modal,Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from './img/footcarelogo.png';

class App extends Component {

    state = {
      show: false,
      submitted: "h"
    };



  render() {
    return (
      <div className="App">

          {/*Navigation*/}
              <div id="navigation" className="container">
                          <Nav id="head" className="justify-content-center">
                                  <img className="d-inline-block" id="logo" src={logo} height='100' width= 'auto'/>
                              <Nav.Link href="tel:07977204502">07977 204 502</Nav.Link>
                              <Nav.Link href="mailto:info@footcarehighland.co.uk"> info@footcarehighland.co.uk</Nav.Link>
                              <NavDropdown title="Book online" id="basic-nav-dropdown">
                                  <NavDropdown.Item>
                                    <button id="bb" type="button" className="btn btn-block" data-toggle="modal" data-target="#priceModal">Prices</button>
                                  </NavDropdown.Item>
                                <NavDropdown.Divider />
                                  <NavDropdown.Item>
                                    <button type="button" className="btn btn-block" data-toggle="modal" data-target="#calModal">Book Consultation (first time patients)</button>
                                  </NavDropdown.Item>
                              </NavDropdown>
                          </Nav>
              </div>

          <Masthead/>
          <PricesModal/>
          <BookingModal handleSubmit = {this.submitDate}>
                  <Cal/>
          </BookingModal>

          <About/>

          {/*Navigation*/}
              <div className="pimg2">
                  <div className="ptext">

                  </div>
              </div>

          <Services/>

          {/*Navigation*/}
            <div className="pimg3">
                <div className="ptext">

                </div>
            </div>

          <Contact/>

      </div>
    );
  }

  showModal = () => {
    this.setState({ show: true });
  };

  submitDate = () => {
    this.setState({ submitted: "hh" });
  };

  hideModal = () => {
    this.setState({ show: false });
  };





}

export default App;
