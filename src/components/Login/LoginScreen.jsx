import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const { addUser } = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== "") {
      const newUser = {
        id: Date.now(),
        name: username,
        color: getRandomColor(),
      };
      addUser(newUser);
    }
  };

  return (
    <div className="flex justify-center h-96 w-40 bg-red-800 border-solid rounded-xl border-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center h-full gap-4"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-bold">Welcome to Chat</h1>
          <h3 className="text-sm">Login or create an account</h3>
        </div>
        <input
          className="w-full"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export default LoginScreen;
