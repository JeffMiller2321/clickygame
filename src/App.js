
import React, {Component} from 'react';
import './App.css';
import data from "./data.json"


class App extends Component {
  state= {
    score:0,
    topscore:0,
    data:data,
    clickedPics: []
  }

  handleClick = (event) => {
    //we are pulling out the id of the picture we clicked
    const { id } = event.target;
    // grab the clickedPics array
    let array = this.state.clickedPics
    // if the picture has not been clicked, it goes into the array,
    // and if it is clicked again (-1)you lose
    if(array.indexOf(id) !== -1){
      alert('you lose, try again')
      this.setState({
        clickedPics:[]
      })
    } else {
      array.push(id);
      // once a picture has been clicked it goes into array and updates your state
      this.setState({
        clickedPics: array
      })
    }
    

  }
  
  
  render(){
  return (
    <div>
  <h1>Current Score: {this.state.clickedPics.length}</h1>
      {this.state.data.map(pic => (
      <img
      alt={pic.name}
       src={pic.image}
       key={pic.id}
       id={pic.id}
       clicked={pic.clicked}
       onClick={this.handleClick}
       />))}
       <h3>Click the pics and try to get 5 in a row without clicking the same pic twice!</h3>
    </div>
  );
}
}

export default App;
