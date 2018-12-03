import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state={number:this.props.defaultNum}
    updateNumber=()=>{
        // this.setState({number:1})
        this.setState({number:this.props.defaultfunction(this.state.number)})
    }
    render() {
        return ( <div><button onClick={this.updateNumber}>Hello World!</button>
        <span>number :{this.state.number}</span></div>
        );
    }
}

export default App;