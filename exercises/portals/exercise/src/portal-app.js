import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./portal-app.css";

export class PortalModal extends Component {
    constructor() {
        super();

        this.portalElement = document.createElement("div");
    }

    componentDidMount() {
        document.body.appendChild(this.portalElement);
    }
    componentWillUnmeint() {
        document.body.removeChild(this.portalElement);
    }

    render() {
        return ReactDOM.createPortal(<div className="regularModal">Hi I'm a regular modal!!</div>, this.portalElement)
    }
}

export class PortalApp extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    return (
      <div className="pageWrapper">
        <div className={`containerDiv lightTheme`}>
          <h1>Portals!!!!</h1>
          <div className="settingsButtonWrapper">
            <button className="settingsButton" onClick={this.toggleModal}>
              settings
            </button>
            {this.state.isModalOpen ? <PortalModal /> : null}
          </div>
          <p>Portals are great!</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
          <p>Here is some more content about portals</p>
        </div>
      </div>
    );
  }
}

export default PortalApp;
