import { Component } from "react";
import './App.css';
import CharacterList from "./components/CardList";
import Start from "./components/Start";


export default class App extends Component {
  state = {
    Gryffindor: [],
    Hufflepuff: [],
    Ravenclaw: [],
    Slytherin: [],
    charList: [],
    start: false,
  }

  getCharacters = () => {
    fetch(`http://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => {
        const responseGryffindor = response.filter(el => el.house === 'Gryffindor');
        const responseHufflepuff = response.filter(el => el.house === 'Hufflepuff');
        const responseRavenclaw = response.filter(el => el.house === 'Ravenclaw');
        const responseSlytherin = response.filter(el => el.house === 'Slytherin');

        this.setState({
          Gryffindor: [...responseGryffindor],
          Hufflepuff: [...responseHufflepuff],
          Ravenclaw: [...responseRavenclaw],
          Slytherin: [...responseSlytherin]
        })
      });
  }

  componentDidMount() {
    this.getCharacters();
  }

  getRandom = () => {
    const { Gryffindor, Hufflepuff, Ravenclaw, Slytherin } = this.state;
    const charList = [];
    charList.push(Gryffindor[Math.floor(Math.random() * Gryffindor.length)])
    charList.push(Hufflepuff[Math.floor(Math.random() * Hufflepuff.length)])
    charList.push(Ravenclaw[Math.floor(Math.random() * Ravenclaw.length)])
    charList.push(Slytherin[Math.floor(Math.random() * Slytherin.length)])
    charList.splice(Math.floor(Math.random() * 4), 1)

    this.setState({ charList: charList })
  }

  getStart = () => {
    const { start } = this.state
    this.setState({ start: !start })
  }

  render() {
    console.log(this.state.charList)
    console.log(this.state.Gryffindor[0])

    return (
      <div>
        {!this.state.start ? <Start alternar={this.getStart}></Start> : <CharacterList list={this.state.charList} restart={this.getRandom}></CharacterList>}
      </div>
    );
  }
}