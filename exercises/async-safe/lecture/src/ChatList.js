import React, { Component } from "react";
import ChatMessage from "./ChatMessage";

export default class ChatList extends Component {
  listRef = null; // reference to the dom node

    state = {
      filteredMessages: this.props.filter
        ? filterMessages(this.props.messages)
        : []
    };

    // used to read stuff from the DOM before an update occurs
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.messages.length < this.props.messages.length) {
            // Check if the user is at the bottom of the
            // window, or if they've scrolled up.
            const { scrollHeight, scrollTop, offsetHeight } = this.listRef;
            const offset = scrollHeight - offsetHeight;
            const scrollOffset = scrollTop - offset;
            this.scrollOffset = scrollOffset;
            this.props.onScrollOffsetChange(scrollOffset);
            return scrollOffset;
        }
        return null;
        // returned value will be passed to componentDidUpdate automatically
    }

  componentDidUpdate(prevProps, snapshot) {
    // If the scroll offset was zero, the user was
    // at the bottom of the chat window. Make sure
    // to keep them at the bottom.
    if (snapshot === 0) {
      const { scrollHeight } = this.listRef;
      this.listRef.scrollTop = scrollHeight;
    }
  }

  componentWillReceiveProps(nextProps) {
    // Only update the filtered messages if a filter
    // actually exists...
    if (
      nextProps.filter &&
      // Only filter again if the filter changed...
      (nextProps.filter !== this.props.filter ||
        // ...or the messages changed.
        nextProps.messages !== this.props.messages)
    ) {
      this.setState({
        filteredMessages: filterMessages(nextProps.messages, nextProps.filter)
      });
    }
  }

  render() {
    const { filteredMessages } = this.state;
    const { messages, filter } = this.props;
    const activeMessages = filter ? filteredMessages : messages;
    return (
      <div
        ref={ref => (this.listRef = ref)}
        className="list-group list-group-flush"
      >
        {activeMessages.map(message => (
          <ChatMessage key={message.id} {...message} />
        ))}
      </div>
    );
  }
}

// A small utility method for applying a filter.
function filterMessages(messages, filter) {
  return messages.filter(({ message }) => {
    const haystack = message.toLowerCase();
    const needle = filter.toLowerCase();
    return haystack.includes(needle);
  });
}
