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

class App extends Component {
    render() {
        return (
            <Router>
                <div className='Main d--flex'>
                    <div className='Header w--full h--full' style={{backgroundImage: `url(${Banner})`}}>
                        <div className='Header-cover w--full h--full'>
                            <div className='Nav w--full m--0'>
                                <div className='Nav-inner'>
                                    <div className='Logo d--inline-block f--left'></div>
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
                    <div className="section-0">
                        <div className="Tours-section d--flex ">
                          <div className="Section-header d--flex">
                              <h2>Our Fantastic Tours</h2>
                              <button className="gdn-btn bg--gradient b--none">View Tours <i className="arrow right"></i> </button>
                          </div>
                          <div className="Cards-parent d--flex">
                              <div className="Cards tour-cards">
                                  <div className="Tour-card-header" >
                                      <div className="Tour-image">
                                          <img src={require('./img/card-yerevan.jpg')} />
                                      </div>
                                            <div className="Tour-card-bottom d--flex">
                                                <div className="Tour-card-text">
                                                  <p>YEREVAN • ARMENIA</p>
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
                                                  <div className="Card-creator">
                                                    <img src={require('./img/avatar1.jpg')} className="Avatar" />
                                                    <p>Tour by <a href="https://facebook.com/odearogy/" target="_blank" className="text-d--none">Hovo Mkhitaryan</a> </p>
                                                  </div>
                                                </div>
                                                <div className="Tour-card-fab">FREE</div>
                                            </div>
                                  </div>
                              </div>
                              <div className="Cards tour-cards">
                                <div className="Tour-card-header" >
                                    <div className="Tour-image">
                                        <img src={require('./img/card-sevan.jpg')} />
                                    </div>
                                          <div className="Tour-card-bottom d--flex">
                                              <div className="Tour-card-text">
                                                <p>SEVAN • ARMENIA</p>
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
                                                <div className="Card-creator">
                                                  <img src={require('./img/avatar2.jpg')} className="Avatar" />
                                                  <p>Tour by <a href="https://www.facebook.com/christopher.margolis.37" target="_blank" className="text-d--none">Chris Margolis</a> </p>
                                                </div>
                                              </div>
                                              <div className="Tour-card-fab">FREE</div>
                                          </div>
                                </div>
                              </div>
                              <div className="Cards tour-cards">
                                <div className="Tour-card-header" >
                                    <div className="Tour-image">
                                        <img src={require('./img/card-gyumri.jpg')} />
                                    </div>
                                          <div className="Tour-card-bottom d--flex">
                                              <div className="Tour-card-text">
                                                <p>GYUMRI • ARMENIA</p>
                                                <h3>Night shoots in one of the Armenia's oldest cities</h3>
                                                <div className="Tour-card-rate-sys">
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
                                                <div className="Card-creator">
                                                  <img src={require('./img/avatar3.jpg')} className="Avatar" />
                                                  <p>Tour by <a href="https://www.facebook.com/profile.php?id=100008007705858" target="_blank" className="text-d--none">Vahagn Rodrigues</a> </p>
                                                </div>
                                              </div>
                                              <div className="Tour-card-fab">FREE</div>
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
                              <div className="Cards">
                                <div className="Blog-card-header" >
                                    <div className="Blog-image" style={{backgroundImage: `url(${Blog1})`}}></div>
                                    <div className="Blog-card-cover"></div>
                                    <div className="Blog-card-bottom">
                                        <div className="Blog-card-text">
                                            <h3>What She Doesn't Want You To Know</h3>
                                            <p>17 July, 2018 • Tourism Tips</p>
                                            <div className="card-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                                qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                        <div className="Card-creator">
                                          <img src={require('./img/avatar2.jpg')} className="Avatar" />
                                          <p>by <a href="https://www.facebook.com/christopher.margolis.37" target="_blank" className="text-d--none">Chris Margolis</a> </p>
                                        </div>
                                        <div className="Blog-card-fab">
                                            <span class="fab-action-button">
                                                  <i class="fab-action-button__icon"></i>
                                            </span>
                                            {/* here is button for social media sharing */}
                                            {/* <ul class="fab-buttons">
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Facebook">
                                                        <i class="icon-material icon-material_fb"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Twitter">
                                                        <i class="icon-material icon-material_tw"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Linkedin">
                                                      <i class="icon-material icon-material_li"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Google+">
                                                      <i class="icon-material icon-material_gp"></i>
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <div className="Cards">
                                <div className="Blog-card-header" >
                                    <div className="Blog-image" style={{backgroundImage: `url(${Blog2})`}}></div>
                                    <div className="Blog-card-cover"></div>
                                    <div className="Blog-card-bottom">
                                        <div className="Blog-card-text">
                                            <h3>What She Doesn't Want You To Know</h3>
                                            <p>17 July, 2018 • Tourism Tips</p>
                                            <div className="card-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                                qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                        <div className="Card-creator">
                                          <img src={require('./img/avatar2.jpg')} className="Avatar" />
                                          <p>by <a href="https://www.facebook.com/christopher.margolis.37" target="_blank" className="text-d--none">Chris Margolis</a> </p>
                                        </div>
                                        <div className="Blog-card-fab">
                                            <span class="fab-action-button">
                                                  <i class="fab-action-button__icon"></i>
                                            </span>
                                            {/* here is button for social media sharing */}
                                            {/* <ul class="fab-buttons">
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Facebook">
                                                        <i class="icon-material icon-material_fb"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Twitter">
                                                        <i class="icon-material icon-material_tw"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Linkedin">
                                                      <i class="icon-material icon-material_li"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Google+">
                                                      <i class="icon-material icon-material_gp"></i>
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <div className="Cards">
                                <div className="Blog-card-header" >
                                    <div className="Blog-image" style={{backgroundImage: `url(${Blog3})`}}></div>
                                    <div className="Blog-card-cover"></div>
                                    <div className="Blog-card-bottom">
                                        <div className="Blog-card-text">
                                            <h3>What She Doesn't Want You To Know</h3>
                                            <p>17 July, 2018 • Tourism Tips</p>
                                            <div className="card-text">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                                qui officia deserunt mollit anim id est laborum.
                                            </div>
                                        </div>
                                        <div className="Card-creator">
                                          <img src={require('./img/avatar2.jpg')} className="Avatar" />
                                          <p>by <a href="https://www.facebook.com/christopher.margolis.37" target="_blank" className="text-d--none">Chris Margolis</a> </p>
                                        </div>
                                        <div className="Blog-card-fab">
                                            <span class="fab-action-button">
                                                  <i class="fab-action-button__icon"></i>
                                            </span>
                                            {/* here is button for social media sharing */}
                                            {/* <ul class="fab-buttons">
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Facebook">
                                                        <i class="icon-material icon-material_fb"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Twitter">
                                                        <i class="icon-material icon-material_tw"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Linkedin">
                                                      <i class="icon-material icon-material_li"></i>
                                                    </a>
                                                </li>
                                                <li class="fab-buttons__item">
                                                    <a href="#" class="fab-buttons__link" data-tooltip="Google+">
                                                      <i class="icon-material icon-material_gp"></i>
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <button className="Slider-btn"> <i className="arrow right slide-arrow"></i></button>
                          </div>
                        </div>
                  </div>

                <div className="section-1">
                  <div className="Guide-section "  style={{backgroundImage: `url(${Foot_banner})`}}>
                      <div className="Guide-cover d--flex">
                          <h2>Do You Want to Become a Tour Guide ?</h2>
                          <p>lorem ipsum dolor sit amet id eos cibo maiestatis instructior, quis affert adipisci ne ius</p>
                          <button className="guide-btn">Become a Tour Guide</button>
                        </div>
                  </div>
                </div>
                <footer>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Send Feedback</a></li>
                    </ul>
                </footer>

                </div>
            </Router>
        );
    }
}

export default App;
