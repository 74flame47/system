import React, {Component} from 'react';
import TileHolder from './tileHolder';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      default: [0,1,2,2,2,2,2],
      cubes: [0,0,0,0,0,0,0]
    }
  }

 async componentDidMount(){
  const url = 'http://localhost:3001/';
  const response = await fetch(url);
  const data = await response.json();

  this.setState({default: data[0]});

  console.log(data[0]);
}

  render(){
    return (
      <div id="bg">
          <TileHolder array={this.state.default}/>
      </div>
    );
  }
}

export default App;
