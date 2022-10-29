import React from "react";
export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={() => this.increment()}>
          +
        </button>
        <label> {this.state.counter} </label>
        <button className="btn btn-warning" onClick={() => this.decrement()}>
          -
        </button>
      </div>
    );
  }
}
