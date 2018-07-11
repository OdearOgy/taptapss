import React, { Component } from 'react';
import './App.css';
import './Tss.css';
import Banner from './img/banner.jpg';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
var banner = {
    backgroundImage: `url(${Banner})`
}
class App extends Component {
    render() {
        return (
            <Router>
                <div className='Main'>
                    <div className='Header w--full h--full' style={ banner }>
                        <div className='Header-cover w--full h--full'>
                            <div className='Nav w--full m--0'>
                                <div className='Nav-inner'>
                                    <div className='Logo d--inline-block f--left'>

                                    </div>
                                    <div className='Menu d--inline-block f--right'>
                                        <ul className='.p--0 .m--0'>
                                            <li className='d--inline-block l-style--none'><a href='#' className='d-block text-d--none text-t--up'>home</a></li>
                                            <li className='d--inline-block l-style--none'><a href='#' className='d-block text-d--none text-t--up'>blog</a></li>
                                            <li className='d--inline-block l-style--none'><a href='#' className='d-block text-d--none text-t--up'>about</a></li>
                                            <li className='d--inline-block l-style--none'><a href='#' className='d-block text-d--none text-t--up'>service</a></li>
                                            <li className='d--inline-block l-style--none'><a href='#' className='d-block text-d--none text-t--up'>content</a></li>
                                            <li className='d--inline-block l-style--none'><a href='#' className='d-block text-d--none text-t--up'>faq</a></li>
                                        </ul>
                                    </div>
                                    <div className='clear'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
