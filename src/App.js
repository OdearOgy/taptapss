import React, { Component } from 'react';
import './App.css';
import './Tss.css';
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import Banner from './img/banner6.jpg';
import card from './img/card-yerevan.jpg';
import logo from './img/512w/Artboard.png';

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
                                    <div className='Logo d--inline-block f--left' style={{backgroundImage: `url(${card})`}}></div>
                                    {/* <div className='clear'></div> */}

                                </div>
                            </div>
                            <div className="Titles text-a--center" >
                              <h2 className="f-f--ourF c--white">TapTap</h2>
                              <p className="f-f--ourF c--white">Walk in a local's shoes & make your own story</p>
                              <button className="Btn-setts f-f--ourF b--white">Become a Local</button>
                            </div>
                          </div>
                          <button className="slider-btn-bottom">click me </button>

                    </div>
                    <section>
                        <div className="Tours-section d--flex ">
                          <div className="Section-header d--flex">
                              <h2>Our Fantastic Tours</h2>
                              <button className="gdn-btn bg--gradient b--none">View Tours <i className="arrow right"></i> </button>
                          </div>
                          <div className="Cards-parent d--flex">
                              <div className="Cards tour-cards">
                                  <div className="Card-header" >
                                      <div className="Image">
                                          <img src={require('./img/card-yerevan.jpg')} />
                                      </div>
                                            <div className="Card-bottom d--flex">
                                                <div className="Card-text">
                                                  <p>YEREVAN * ARMENIA</p>
                                                  <h3>Discover hidden places in Yerevan</h3>
                                                  <div className="Card-rate-sys">
                                                    <div className="star-rating">
                                                        			<input id="star-5" type="radio" name="rating" value="star-5" />
                                                        			<label for="star-5" title="5 stars">
                                                        					<i className="active fa fa-star" aria-hidden="true"></i>
                                                        			</label>
                                                        			<input id="star-4" type="radio" name="rating" value="star-4" />
                                                        			<label for="star-4" title="4 stars">
                                                        					<i className="active fa fa-star" aria-hidden="true"></i>
                                                        			</label>
                                                        			<input id="star-3" type="radio" name="rating" value="star-3" />
                                                        			<label for="star-3" title="3 stars">
                                                        					<i className="active fa fa-star" aria-hidden="true"></i>
                                                        			</label>
                                                        			<input id="star-2" type="radio" name="rating" value="star-2" />
                                                        			<label for="star-2" title="2 stars">
                                                        					<i className="active fa fa-star" aria-hidden="true"></i>
                                                        			</label>
                                                        			<input id="star-1" type="radio" name="rating" value="star-1" />
                                                        			<label for="star-1" title="1 star">
                                                        					<i className="active fa fa-star" aria-hidden="true"></i>
                                                        			</label>
		                                                </div>
                                                        192
                                                  </div>
                                                  <div className="Card-creator d--flex">
                                                    <img src={require('./img/avatar1.jpg')} className="Avatar" />
                                                    <p>Tour by <a href="https://facebook.com/odearogy/" target="_blank" className="text-d--none">Hovo Mkhitaryan</a> </p>
                                                  </div>
                                                </div>
                                                <div className="Card-fab">FREE</div>
                                            </div>
                                  </div>
                              </div>
                              <div className="Cards tour-cards">
                                <div className="Card-header" >
                                    <div className="Image">
                                        <img src={require('./img/card-sevan.jpg')} />
                                    </div>
                                          <div className="Card-bottom d--flex">
                                              <div className="Card-text">
                                                <p>SEVAN * ARMENIA</p>
                                                <h3>Discover the Land of Free Water!</h3>
                                                <div className="Card-rate-sys">
                                                  <div className="star-rating">
                                                            <input id="star-5" type="radio" name="rating" value="star-5" />
                                                            <label for="star-5" title="5 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-4" type="radio" name="rating" value="star-4" />
                                                            <label for="star-4" title="4 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-3" type="radio" name="rating" value="star-3" />
                                                            <label for="star-3" title="3 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-2" type="radio" name="rating" value="star-2" />
                                                            <label for="star-2" title="2 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-1" type="radio" name="rating" value="star-1" />
                                                            <label for="star-1" title="1 star">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                  </div>
                                                    143
                                                </div>
                                                <div className="Card-creator d--flex">
                                                  <img src={require('./img/avatar2.jpg')} className="Avatar" />
                                                  <p>Tour by <a href="https://www.facebook.com/christopher.margolis.37" target="_blank" className="text-d--none">Chris Margo</a> </p>
                                                </div>
                                              </div>
                                              <div className="Card-fab">FREE</div>
                                          </div>
                                </div>
                              </div>
                              <div className="Cards tour-cards">
                                <div className="Card-header" >
                                    <div className="Image">
                                        <img src={require('./img/card-gyumri.jpg')} />
                                    </div>
                                          <div className="Card-bottom d--flex">
                                              <div className="Card-text">
                                                <p>GYUMRI * ARMENIA</p>
                                                <h3>Night shoots in one of the Armenia's oldest cities</h3>
                                                <div className="Card-rate-sys">
                                                  <div className="star-rating">
                                                            <input id="star-5" type="radio" name="rating" value="star-5" />
                                                            <label for="star-5" title="5 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-4" type="radio" name="rating" value="star-4" />
                                                            <label for="star-4" title="4 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-3" type="radio" name="rating" value="star-3" />
                                                            <label for="star-3" title="3 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-2" type="radio" name="rating" value="star-2" />
                                                            <label for="star-2" title="2 stars">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                            <input id="star-1" type="radio" name="rating" value="star-1" />
                                                            <label for="star-1" title="1 star">
                                                                <i className="active fa fa-star" aria-hidden="true"></i>
                                                            </label>
                                                  </div>
                                                      830
                                                </div>
                                                <div className="Card-creator d--flex">
                                                  <img src={require('./img/avatar3.jpg')} className="Avatar" />
                                                  <p>Tour by <a href="https://www.facebook.com/profile.php?id=100008007705858" target="_blank" className="text-d--none">Vahagn Rodrigues</a> </p>
                                                </div>
                                              </div>
                                              <div className="Card-fab">FREE</div>
                                          </div>
                                </div>
                              </div>
                              <button className="Slider-btn"> <i className="arrow right slide-arrow"></i></button>
                          </div>
                        </div>

                        <div className="Blog-section d--flex">
                          <div className="Section-header d--flex ">
                              <h2>Our Recent Blogs</h2>
                              <button className="gdn-btn bg--gradient b--none">View Blogs <i className="arrow right "></i> </button>
                          </div>
                          <div className="Cards-parent d--flex">
                              <div className="Cards b--black"> hello world</div>
                              <div className="Cards b--black">lorem ipsum</div>
                              <div className="Cards b--black"> lorem ipsum 2</div>
                              <button className="Slider-btn"> <i className="arrow right slide-arrow"></i></button>
                          </div>
                        </div>
                  </section>

                </div>
            </Router>
        );
    }
}

export default App;
