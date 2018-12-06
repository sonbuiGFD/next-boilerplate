import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';

class ChatOne extends Component {
  // fetch old messages data from the server
  static async getInitialProps({ req }) {
    const { data } = await axios('http://localhost:3000/messages/chat1');
    return { messages: [...data] };
  }

  static defaultProps = {
    messages: [],
  };

  // init state with the prefetched messages
  state = {
    field: '',
    newMessage: 0,
    messages: this.props.messages,
    subscribe: false,
    subscribed: false,
  };

  componentDidMount() {
    this.subscribe();
  }

  componentDidUpdate() {
    this.subscribe();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.socket && !state.subscribe) return { subscribe: true };
    return null;
  }

  // close socket connection
  componentWillUnmount() {
    this.props.socket.off('message.chat1', this.handleMessage);
    this.props.socket.off('message.chat2', this.handleOtherMessage);
  }

  subscribe = () => {
    if (this.state.subscribe && !this.state.subscribed) {
      // connect to WS server and listen event
      this.props.socket.on('message.chat1', this.handleMessage);
      this.props.socket.on('message.chat2', this.handleOtherMessage);
      this.setState({ subscribed: true });
    }
  };

  // add messages from server to the state
  handleMessage = (message) => {
    this.setState(state => ({ messages: state.messages.concat(message) }));
  };

  handleOtherMessage = () => {
    this.setState(prevState => ({ newMessage: prevState.newMessage + 1 }));
  };

  handleChange = (event) => {
    this.setState({ field: event.target.value });
  };

  // send messages to server and add them to the state
  handleSubmit = (event) => {
    event.preventDefault();

    // create message object
    const message = {
      id: new Date().getTime(),
      value: this.state.field,
    };

    // send object to WS server
    this.props.socket.emit('message.chat1', message);

    // add it to state and clean current input value
    this.setState(state => ({
      field: '',
      messages: state.messages.concat(message),
    }));
  };

  render() {
    return (
      <main>
        <div>
          <Link href="/">
            <a>Chat One</a>
          </Link>
          <br />
          <Link href="/clone">
            <a>
              {`Chat Two ${
                this.state.newMessage > 0 ? `( ${this.state.newMessage} new message )` : ''
              }`}
            </a>
          </Link>
          <ul>
            {this.state.messages.map(message => (
              <li key={message.id}>{message.value}</li>
            ))}
          </ul>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Hello world!"
              value={this.state.field}
            />
            <button type="button">Send</button>
          </form>
        </div>
      </main>
    );
  }
}

export default ChatOne;
