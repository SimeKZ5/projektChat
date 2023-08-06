import React from "react";
import Header from "./Header";
import Users from "../UserPart/Users";

function Chat() {
  return (
    <div className="flex flex-row items-center">
      <Users />
      <div className="border-4 border-cyan-900 rounded">
        <Header />
        <div className="flex flex-col items-center bg-black gap-y-40 min-h-455px w-485px">
          <div className="w-96 h-96"></div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
