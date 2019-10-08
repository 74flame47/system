import React, {Component} from 'react';
import Cube from './cube';
import './tile.css';



class Tile extends Component {
    constructor({title, copy}){
        super()
        this.state = {
            projects: [0,0,0,0,0,0,0,0,0,0,0],

        }
    }

    async componentDidMount(){
        const url = 'http://localhost:3001/';
        const response = await fetch(url);
        const data = await response.json();
      
        this.setState({projects: data[1]});
      
        console.log(data[1]);
      }

    render(){
        
    const {card} = this.props;

    

    return(
        <div className="tile">
            <h1>{card.title}</h1>
            <p>{card.copy}</p>
            <Cube card={card} array={this.state.projects} />
        </div>
    )
    }
}

export default Tile;