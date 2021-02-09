import { Component } from "react";
import Character from "../Card";
import "./style.css";

export default class CharacterList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="container">
        <div className="cardList">
          {list.map((char, index) => {
            return (
              <div>
                <div>
                  <Character key={index} char={char} />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={this.props.restart}>Tentar novamente</button>
        </div>
      </div>
    );
  }
}
