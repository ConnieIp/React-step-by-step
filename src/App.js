import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number.js'

class App extends Component {
    state={number:this.props.defaultNum}
    updateNumber=()=>{
        // this.setState({number:1})
        this.setState({number:this.props.defaultfunction(this.state.number)})
    }
    render() {
        return ( <div><button onClick={this.updateNumber}>Hello World!</button>
        {/* <span>number :{this.state.number}</span> */}
        <Number/>
        </div>
        );
    }
}

export default App;