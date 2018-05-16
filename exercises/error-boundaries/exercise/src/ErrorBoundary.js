import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    state = {error: null, info: null};

    componentDidCatch(error, info) {
        const {onError} = this.props;
        if (onError) {
            onError(error, info);
        }
        this.setState({error, info});
    }

    render() {
        const {children, Fallback} = this.props;
        const {error, info} = this.state;
        if (error) {
            return (
                <b>{info}</b>
            )
        }
        return (
            <div>
                {children}
            </div>
        );
    }
}
