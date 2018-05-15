import React, { Component } from "react";
import hoistStatics from "hoist-non-react-statics";

function getDisplayName(C) {
    return C.displayName || C.name || C
}
function withOnlineStatus(
    WrappedComponent
) {
    class OnlineStatus extends Component {
        state = {
            isOnline: navigator.onLine
        };

        componentDidMount() {
            window.addEventListener("online", this.handleOnline);
            window.addEventListener("offline", this.handleOffline);
        }

        componentWillUnount() {
            window.removeEventListener("online", this.handleOnline);
            window.removeEventListener("offline", this.handleOffline);
        }

        handleOnline = () => {
            this.setState({ isOnline: true });
        };

        handleOffline = () => {
            this.setState({ isOnline: false });
        };

        render() {
            return (
                <WrappedComponent
                    isOnline = {this.state.isOnline}
                    {...this.props}
                />
            );
        }
    }
    hoistStatics(OnlineStatus, WrappedComponent);
    // extend displayName in order to get a more transparent output in the react devtools:
    const displayName = getDisplayName(WrappedComponent);
    OnlineStatus.displayName = `withOnlineStatus(${displayName})`;
    return OnlineStatus;
};


export const Online = withOnlineStatus(
    class Online extends Component {
        static ConnectionSpeed = () => {
            const { downlink } = navigator.connection;
            return <span>~{downlink}Mbp/s</span>;
        };

        static ConnectionType = () => {
            const { effectiveType } = navigator.connection;
            return <span>{effectiveType.toUpperCase()}</span>;
        };
        render() {
            const { isOnline } = this.props;
            return isOnline ? this.props.children : null;
        }
    }
);

export const Offline = withOnlineStatus(
  class Offline extends Component {
    render() {
      const { isOnline, children } = this.props;
      return isOnline ? null : children;
    }
  }
);
