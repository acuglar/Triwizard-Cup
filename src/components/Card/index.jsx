import { Component } from "react";
import "./style.css";

export default class Character extends Component {
  render() {
    const { image, name, house } = this.props.char;
    return (
      <div className="card">
        <img className="picture" src={image} alt={name} />
        <div>{name}</div>
        <div>{house}</div>
      </div>
    );
  }
}
