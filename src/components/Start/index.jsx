import { Component } from "react";
import "./style.css";

export default class Start extends Component {
  render() {
    return (
      <div className="start">
        <h1>Torneio Tribruxo</h1>
        <div>Clique no botão para encontrar os feiticeiros!</div>
        <div>
          <button onClick={this.props.alternar}>Começar!</button>
        </div>
      </div>
    );
  }
}
