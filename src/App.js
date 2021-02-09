import { Component } from "react";
import './App.css';
import CharacterList from "./components/CardList";
import Start from "./components/Start";


export default class App extends Component {
  state = {
    charList: [],
    charListRender: [],
    start: false,
  }

  getCharacters = () => {
    fetch(`https://hp-api.herokuapp.com/api/characters/students`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ charList: [...response] })
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getCharacters();
  }

  componentWillUnmount() {
    this.getCharacters();
  }

  componentDidUpdate(_, prevState) {
    console.log(prevState);
    if (this.state.charList !== prevState.charList) {
      this.getRandom();
    }
  }

  getRandom = () => {
    const { charList } = this.state;

    const Gryffindor = charList.filter(el => el.house === 'Gryffindor');
    const Hufflepuff = charList.filter(el => el.house === 'Hufflepuff');
    const Ravenclaw = charList.filter(el => el.house === 'Ravenclaw');
    const Slytherin = charList.filter(el => el.house === 'Slytherin');

    const randomize = [
      Gryffindor[Math.floor(Math.random() * Gryffindor.length)],
      Hufflepuff[Math.floor(Math.random() * Hufflepuff.length)],
      Ravenclaw[Math.floor(Math.random() * Ravenclaw.length)],
      Slytherin[Math.floor(Math.random() * Slytherin.length)]
    ];
    randomize.splice(Math.floor(Math.random() * randomize.length), 1)

    this.setState({ charListRender: randomize })
  }

  getStart = () => {
    const { start } = this.state
    this.setState({ start: !start })
  }

  render() {
    console.log(this.state.charListRender)

    return (
      <div>
        {!this.state.start ? <Start alternar={this.getStart}></Start> : <CharacterList list={this.state.charListRender} restart={this.getRandom}></CharacterList>}
      </div>
    );
  }
}