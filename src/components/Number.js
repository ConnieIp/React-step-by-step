import React, { Component } from 'react';

export default class Number extends Component{
    render(){
        return (<span>number :{this.props.num}</span>);
    }
}