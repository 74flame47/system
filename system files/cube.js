import React from 'react';

const Cube = ({array, card}) => {

    const cubes = array.map((cube, i) => {
        if(card.title === cube.title){
            return(<div key={i} className="cube"></div>)
        }
    });

    return (<div id="cube-container">{cubes}</div>)
}


export default Cube;