import React, { Component, createContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import Button from "./Button";

const ChatContext = createContext();

class Chat extends Component {
  static Messages = Messages;
  static Input = Input;
  static Button = Button;

  updateCurrentMessage = (event) => {
    const { value } = event.target;
    this.setState({ currentMessage: value });
  };

  add = () => {
    const { currentMessage } = this.state;

    this.setState((prevState) => ({
      currentMessage: "",
      messages: [
        ...prevState.messages,
        {
          text: currentMessage,
          timestamp: new Date().toLocaleDateString(),
        },
      ],
    }));
  };

  state = {
    currentMessage: "",
    messages: [],
    updateCurrentMessage: this.updateCurrentMessage,
    add: this.add,
  };

  render() {
    const { children } = this.props;

    return (
      <ChatContext.Provider value={this.state}>
        <h1>Chatroom</h1>
        {children}
      </ChatContext.Provider>
    );
  }
}

export const ChatConsumer = ({ children }) => (
  <ChatContext.Consumer>
    {(context) => {
      if (!context) {
        throw new Error(
          "Compound components of Chat should render beneath Chat!"
        );
      }
      return children(context);
    }}
  </ChatContext.Consumer>
);
export default Chat;
