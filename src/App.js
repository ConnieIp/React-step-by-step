import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    alertText(){
        alert('now you know how to handle onclick event')
    }
    render() {
        return ( <div><button onClick={this.alertText}>Hello World!</button>
        <span>number :0</span></div>
        );
    }
}

export default App;