import React, { Component } from 'react';
import '../Static/css/base.css';
import '../Static/css/cols.css';
import Wx_login from './Component/Login/js/wx_login';

class Page extends Component {
    render() {
        return (
            <Wx_login/>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Page/>
            </div>
        )
    }
}

export default App;
