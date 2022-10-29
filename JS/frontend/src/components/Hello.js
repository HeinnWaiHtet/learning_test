import React from "react";
import Post from "./Post";
export default class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let obj = {
      title: "Nice Avator",
      name: "Iron Man",
    };
    return (
      <div>
        <h1>Hello {this.props.name} </h1>
        <Post obj={obj} />
      </div>
    );
  }
}
