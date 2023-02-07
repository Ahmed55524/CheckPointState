import React, { Component } from "react";
import './App.css';
export default class App extends Component {

state = {
  counter : 0,
  isVisible : true,
};

  inc =()=> {this.setState({counter : this.state.counter+1})}
  dec =()=> {
    if (this.state.counter>0) {
    {this.setState({counter : this.state.counter-1})}
    }
  };
  handleShow =()=> {
    this.setState({isVisible: !this.state.isVisible})
  };
  render() {
    return (
      
      <div className='App'>
        <div>
        <button onClick={() => this.handleShow()}> {this.state.isVisible ? "Hide":"Show"}</button>
        <h1>Counter : {this.state.counter}</h1>
        <button onClick={() => this.inc()}>+</button>
        <button onClick={()=> this.dec()}>-</button>
        </div>
      </div>
      )
  }
}