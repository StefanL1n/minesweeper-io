import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';

import Header from './Header';

class App extends Component {
    render() {
        return (
            <div className='ui container'>
                <Router history={history}>
                    <div>
                        <Header/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;