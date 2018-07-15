import React, { Component } from 'react';
import './App.css';
import './Tss.css';
import Banner from './img/banner2.jpg';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='Main'>
                    <div className='Header w--full h--full' style={{backgroundImage: `url(${Banner})`}}>
                        <div className='Header-cover w--full h--full'>
                            <div className='Nav w--full m--0'>
                                <div className='Nav-inner'>
                                    <div className='Logo d--inline-block f--left'></div>
                                    <div className='clear'></div>

                                </div>
                            </div>
                            <div className="Titles text-a--center" >
                              <h2 className="f-f--ourF c--white">TapTap</h2>
                              <p className="f-f--ourF c--white">Walk in a local's shoes and make your own story</p>
                              <button className="Btn-setts f-f--ourF b--white">Become a Local</button>
                            </div>
                          </div>
                    </div>
                    <section>
                        <div className="Tours-section text-a--center">
                          <h2>Our Fantastic Tours</h2>
                          <div className="Cards-parent">
                              <div className="Cards b--black"> hello world</div>
                              <div className="Cards b--black">lorem ipsum</div>
                              <div className="Cards b--black"> lorem ipsum 2</div>
                          </div>
                        </div>

                        <div className="Blog-section text-a--center">
                          <h2>Our Recent Blogs</h2>
                          <div className="Cards-parent">
                              <div className="Cards b--black"> hello world</div>
                              <div className="Cards b--black">lorem ipsum</div>
                              <div className="Cards b--black"> lorem ipsum 2</div>
                          </div>
                        </div>
                  </section>

                </div>
            </Router>
        );
    }
}

export default App;
