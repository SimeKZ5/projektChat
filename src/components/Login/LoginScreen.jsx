import React, { useState } from "react";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
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
        <input
          className="w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
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

export default LoginScreen;
