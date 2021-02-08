import { Component } from "react";

export default class Start extends Component {
  render() {
    return (
      <div>
        <h1>Torneio tribruxo</h1>
        <div>Clique no botão para encontrar os feiticeiros!</div>
        <button onClick={this.props.alternar}>Começar!</button>
      </div>
    );
  }
}
