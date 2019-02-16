import React from "react";

export default function Header(props){
    return(
        <header className="inner-container">
            <h1>Clicky Game</h1>
            <div>{props.message}</div>
            <div>
                <div>Current Score: {props.currentScore}</div>
                <div>Top Score: {props.topScore}</div>
            </div>
        </header>
    )
}
