import React, { Component } from 'react';
import Header from "./Header";
import Heading from "./Heading";
import { Provider } from "./Context";

class App extends Component {
    render() {
        return (
            <Provider value={{ primaryColor: '#fd79a8' }}>
                <div>
                    <Header>BAD WEBSITE</Header>
                    <div style={{ padding: 20 }}>
                        <Heading>Bad Content</Heading>
                        <p>This suxx.</p>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App;
