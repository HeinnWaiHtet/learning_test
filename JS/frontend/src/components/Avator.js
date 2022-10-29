import React from "react";
export default class Avator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> Avactor </h1>
        <h3> Avator Name : {this.props.name} </h3>
      </div>
    );
  }
}
