import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const removeUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <UserContext.Provider
      value={{ users, addUser, removeUser, messages, addMessage }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
