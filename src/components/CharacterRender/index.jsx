import { Component } from "react";
import Character from "../Character";

export default class CharacterRender extends Component {
  render() {
    const { characters } = this.props;
    /*     const random = Math.floor(Math.random() * characters.length);
    const character = characters[random]; */
    return (
      <div className="container">
        {characters.map((char, index) => (
          <Character key={index} char={char}></Character>
        ))}
      </div>
    );
  }
}
