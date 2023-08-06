import React from "react";
import LoginScreen from "./components/Login/LoginScreen";
import Chat from "./components/Chat/ChatPart/Chat";
import Users from "./components/Chat/UserPart/Users";

function App() {
  return (
    <div className="container flex justify-center items-center">
      <Chat />
    </div>
  );
}

export default App;
