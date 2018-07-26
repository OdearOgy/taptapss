import React, { Component } from 'react';
import './App.css';
import './Tss.css';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import Banner from './img/banner6.jpg';
import Blog1 from  './img/agriculture-china.jpg';
import Blog2 from './img/adventure-compass.jpg';
import Blog3 from './img/adventure-back.jpg';
import Foot_banner from './img/footer-banner.jpg';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
class Tours extends Component {
  componentDidMount () {
    const id = this.props.match.params.id;
    console.log(id);
  }
  render() {
    return (
        <div className="Tours-main d-flex">
          <div className="Tours-text">
            <button className="ToursP-btn">BOOK NOW</button>
            <p>Sevan, Armenia</p>
            <h2>Discover the Land of Free Water</h2>
            <p>Language • English</p>
            <p className="Tours-description">lorem ipsum a lot o lorem ipsum, Khachatur please fill this field</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48504.63543587962!2d44.93905954052659!3d40.551757213329545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404046c39477eb71%3A0xeb5b902ad8d28d76!2sSevan%2C+Armenia!5e0!3m2!1sen!2s!4v1532613714971" width="600" height="450" frameborder="0" style={{'border':0}} allowfullscreen></iframe>
          </div>
          <div className="Tours-photos">

          </div>
        </div>
    )
  }
}
export default Tours;
