
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from "/data.json"
import Pics from "./components/pics"

class App extends Component {
  state= {score:0,topscore:0,data}
  
  
  render(){
  return (
    <div>
      <Pics
       src={this.state.image}
       id={this.state.id}
       />
    </div>
  );
}
}

export default App;
