import React, { Component } from "react";
import Counters from "./components/Counters";

class App extends Component {
  // State
  state = {
    counters: [],
  };

  // handleAddCounter
  handleAddCounter = () => {
    this.setState((prev) => ({
      counters: [
        ...prev.counters,
        {
          id:
            prev.counters.length +
            (prev.counters.length === 0 ? 1 : this.state.counters[0].id),
          count: 0,
        },
      ],
    }));
    console.log(this.state.counters);
  };

  // handleRemoveCounter
  handleRemoveCounter = (id) => {
    this.setState((prev) => ({
      counters: prev.counters.filter((item) => item.id !== id),
    }));
  };

  // handleIncrease
  handleIncrease = (id) => {
    let counters = [...this.state.counters];
    counters = counters.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    this.setState({ counters });
  };

  // handleDecrease
  handleDecrease = (id) => {
    let counters = [...this.state.counters];
    counters = counters.map((item) =>
      item.id === id
        ? { ...item, count: item.count !== 0 ? item.count - 1 : 0 }
        : item
    );
    this.setState({ counters });
  };

  // HTML Code
  render() {
    const { counters } = this.state;

    return (
      <>
        <Counters
          counters={counters}
          addCounter={this.handleAddCounter}
          removeCounter={this.handleRemoveCounter}
          increase={this.handleIncrease}
          decrease={this.handleDecrease}
        />
      </>
    );
  }
}

export default App;
