import React from "react";
import ReactDOM from "react-dom";
import Chat from "./components/Chat";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Chat>
        <Chat.Messages />
        <Chat.Input />
        <Chat.Button />
      </Chat>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);