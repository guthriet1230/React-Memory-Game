import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Tile from "./components/Tile";
import Description from "./components/Description";

function gameReset(array) {
  array.forEach(name => name.checked = false )
};

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: "You've Guessed Correctly",
    tiles: [
      {
        id: 0,
        name: "Robb",
        image: "images/Robb.jpeg"
      },
      {
        id: 1,
        name: "Sansa",
        image: "images/Sansa.jpg"
      },
      {
        id: 2,
        name: "Jon",
        image: "images/Jon.jpg"
      },
      {
        id: 3,
        name: "Tyrion",
        image: "images/Tyrion.jpg"
      },
      {
        id: 4,
        name: "Cersei",
        image: "images/Cersei.jpg"
      },
      {
        id: 5,
        name: "Jamie",
        image: "images/Jamie.jpg"
      },
      {
        id: 6,
        name: "Drogo",
        image: "images/Drogo.jpeg"
      },
      {
        id: 7,
        name: "Khaleesi",
        image: "images/Khaleesi.jpg"
      },  
      {
        id: 8,
        name: "Ned Stark",
        image: "images/Ned.jpeg"
      },
      {
        id: 9,
        name: "Night King",
        image: "images/King.jpg"
      },
      {
        id: 10,
        name: "Grey Worm",
        image: "images/Worm.jpeg"
      },
      {
        id: 11,
        name: "Theon Greyjoy",
        image: "images/Theon.png"
      }
    ]
  };



  

  handleTileClick = id => {
    // console.log(`You've clicked ${id}`);

    //* check to see if this has been clicked before!
    this.state.tiles.forEach(tile => {
      if (tile.id === id) {
        if (tile.checked === true) {
          // console.log("you've clicked the same tile twice");
          this.setState({ message: "Try Again!" })
          if (this.state.currentScore > this.state.topscore) {
            this.setState({ topscore: this.state.currentScore });
            this.setState({ currentScore: 0 });
            gameReset(this.state.tiles)
          } else{
            this.setState({ currentScore: 0 });
            gameReset(this.state.tiles)
          }
        } else {
          tile.checked = true;
          
          //update the score
          this.setState({ currentScore: this.state.currentScore + 1 });
        
          //if the score is greater than the top score, update the top score too.
          this.setState({ message: "Well Done. Keep Going!" });

          //randomize the tiles
          let tiles = this.state.tiles.slice(0);
          tiles.sort(() => Math.random() - 0.5);
          this.setState({tiles})
        }
      }
    });

  };

  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Description />
        <div className="game-board">
          {this.state.tiles.map((tile, i) => (
            <Tile
              key={i}
              id={tile.id}
              handleTileClick={this.handleTileClick}
              char={tile.name}
              image={tile.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
