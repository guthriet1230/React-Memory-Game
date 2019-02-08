import React from "react";

export default function Tile(props) {
    return(
        <div className="tile" onClick={()=>props.handleTileClick(props.id)}>
            <img alt={props.name} src={props.image}/>
            {/* {props.char} */}
        </div>
    )
}