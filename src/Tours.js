import React, { Component } from 'react';
import './App.css';
import './Tss.css';
import './Tours.css';
import Tour_photo from './img/tour1.jpg';

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
        <div className="Tours-main d--flex">
          <div className="Tours-text">
            <button className="ToursP-btn">BOOK NOW</button>
            <p className="icons"> <img src={require('./img/icons/loc.svg')} />Sevan, Armenia</p>
            <h2>Discover the Land of Free Water</h2>
            <p>Language • English</p>
            <p className="Tours-description">lorem ipsum a lot o lorem ipsum, Khachatur please fill this field</p>
            <iframe className="Tours-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48504.63543587962!2d44.93905954052659!3d40.551757213329545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404046c39477eb71%3A0xeb5b902ad8d28d76!2sSevan%2C+Armenia!5e0!3m2!1sen!2s!4v1532613714971" frameborder="0" style={{'border':0}} allowfullscreen></iframe>
            <p> by <a href="https://www.facebook.com/profile.php?id=100008007705858" target="_blank" className="text-d--none">Vahagn Zaqaryan</a> </p>
          </div>
          <div className="Tours-photos" style={{backgroundImage: `url(${Tour_photo})`}}>
            {/* <img src={require('./img/tour1.png')} /> */}
          </div>
        </div>
    )
  }
}
export default Tours;
