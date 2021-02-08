import { Component } from "react";
import './App.css';
import CharacterRender from "./components/CharacterRender";


export default class App extends Component {
  state = {
    Gryffindor: [],
    Hufflepuff: [],
    Ravenclaw: [],
    Slytherin: [],
  }

  getCharacters = () => {
    const { Gryffindor, Hufflepuff, Ravenclaw, Slytherin } = this.state;
    fetch(`http://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => {
        const responseGryffindor = response.filter(el => el.house === 'Gryffindor');
        const responseHufflepuff = response.filter(el => el.house === 'Hufflepuff');
        const responseRavenclaw = response.filter(el => el.house === 'Ravenclaw');
        const responseSlytherin = response.filter(el => el.house === 'Slytherin');

        this.setState({
          Gryffindor: [...Gryffindor, ...responseGryffindor],
          Hufflepuff: [...Hufflepuff, ...responseHufflepuff],
          Ravenclaw: [...Ravenclaw, ...responseRavenclaw],
          Slytherin: [...Slytherin, ...responseSlytherin]
        })
      });
  }

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    /*     const random = Math.floor(Math.random() * Slytherin.length); */
    return (
      <div className="App" >
        <CharacterRender characters={this.state.Slytherin}></CharacterRender>
        <CharacterRender characters={this.state.Gryffindor}></CharacterRender>
        <CharacterRender characters={this.state.Ravenclaw}></CharacterRender>
      </div>
    );
  }
}