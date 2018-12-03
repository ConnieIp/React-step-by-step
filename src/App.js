import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './components/Number.js'
import Line from './components/Line.js'

class App extends Component {
    state={
        number:this.props.defaultNum,
        numberArray:new Array(1).fill(0)
    }
    updateNumber=()=>{
        // this.setState({number:1})
        var number = this.props.defaultfunction(this.state.number);
        this.setState({
            number:number,
            numberArray:new Array(number).fill(0)
        })
    }
    render() {
        return ( <div><button onClick={this.updateNumber}>Hello World!</button>
        {/* <span>number :{this.state.number}</span> */}
        <Number num={this.state.number}/>
        {this.state.numberArray.map(each=><Line/>)}
        </div>
        );
    }
}

export default App;