import React from 'react';
import Tile from './tile';




const TileHolder = ({array}) => {


    const tiles = array.map((card, i) => {
                    return(<Tile key={i} card={card}/>);
                })


    return(
            <div id="tile-container">
                {tiles}
            </div>)
}



export default TileHolder;