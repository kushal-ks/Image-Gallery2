import React, { Component } from 'react';
import { Gellary } from './components/gellery'; 
import Unsplash from 'unsplash-js';
import logo from './logo.svg';
import './App.css';

const base_url = 'https://reqres.in';



class App extends Component {
  
  constructor(){
    super();
    this.state={
      alldata:[]
    }    
  }
  _check() {
    
  }
  render() {
    return (
      <div className="App">
        <Gellary />
      </div>
    );
  }
}

export default App;
