import React from "react";
import LoginScreen from "./components/Login/LoginScreen";
import Chat from "./components/Chat/ChatPart/Chat";
import { UserProvider } from "./components/Login/UserContext";

function App() {
  return (
    <UserProvider className="container flex justify-center items-center">
      <LoginScreen />
      <Chat />
    </UserProvider>
  );
}

export default App;
