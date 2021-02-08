import { Component } from "react";
import Character from "../Card";

export default class CharacterList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="container">
        {list.map((char, index) => {
          return (
            <div>
              <Character key={index} char={char} />
              <button onClick={this.props.restart}>Tentar novamente</button>
            </div>
          );
        })}
      </div>
    );
  }
}
