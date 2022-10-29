import React from "react";
import Avator from "./Avator";
export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Post Title : {this.props.obj.title}</h1>
        <Avator name={this.props.obj.name}></Avator>
      </div>
    );
  }
}
