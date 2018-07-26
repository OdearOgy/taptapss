import React, { Component } from 'react';
import Main from './Main.js';
import Tour from './Tours.js';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
              <div>
                <Route exact path = '/' component={Main}/>
                <Route exact path = '/tour/:id' component={Tour}/>
              </div>
            </Router>
        );
    }
}

export default App;
