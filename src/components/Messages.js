import React from "react";
import { ChatConsumer } from "./Chat";

const Messages = () => (
  <ChatConsumer>
    {({ messages }) => (
      <div>
        <h3>Messages</h3>
        <div className="msg__list">
          {messages.map((msg, i) => (
            <div className="msg" key={i}>
              <span className="msg__timestamp">{msg.timestamp}</span>
              <span className="msg__text">{msg.text}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </ChatConsumer>
);

export default Messages;
