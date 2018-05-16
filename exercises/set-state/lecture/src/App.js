import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
      console.log('before: ', this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
      console.log('after: ', this.state.count); // won't update → setState is asynchronous!
      // BUT: will be synchronous when called inside of a setTimeout block!
      // i.e. don't rely on either behaviour
  };

    increment_multiple_times = () => {
        // use this form if the state update depends on a previous state!
        this.setState(state => {
            return {
                count: state.count + 1,
            }
        });
    };

    incrementBy = (n, fn) => {
        let i=0;
        while (i++ < n) {
            fn();
        }
    };

  render() {
    const {count} = this.state;
    return (
      <div className="App">
        <h1>Current Count: {count}</h1>
        <button
          className="btn"
          onClick={this.increment}>
          +
        </button>
        <button
          className="btn"
          onClick={() => this.incrementBy(5, this.increment)}>
          +5 (won't work)
        </button>
        <button
          className="btn"
          onClick={() => this.incrementBy(5, this.increment_multiple_times)}>
          +5
        </button>
      </div>
    );
  }
}

export default App;
