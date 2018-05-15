import React, { Component } from 'react';
import './App.css';

import Fetch from './Fetch';

class App extends Component {
    renderFetch = ({loading, error, data}) => {
        if (error !== null) {
            return <p>Error: {error}</p>;
        }
        return loading === true ? <p> Loading...</p> : <p>{data}</p>
    };
    render() {
        return (
            <Fetch url="http://test.com" children={this.renderFetch} />
        );
    }
}

export default App;
