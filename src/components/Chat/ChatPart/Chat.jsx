import React, { useContext, useState } from "react";
import { UserContext } from "../../Login/UserContext";
import Header from "./Header";
import Users from "../UserPart/Users";
import { Scaledrone } from "scaledrone-react-native";

function Chat() {
  const { users, messages, addMessage } = useContext(UserContext);
  const [messageText, setMessageText] = useState("");

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleSubmitMessage = (event) => {
    event.preventDefault();
    if (messageText.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        text: messageText,
        userId: 0,
      };
      addMessage(newMessage);
      setMessageText("");
    }
  };
  return (
    <div className="flex flex-row items-center">
      <Users />
      <div className="border-4 border-cyan-900 rounded">
        <Header />
        <div className="flex flex-col items-center bg-black gap-y-40 h-96 w-96">
          <Scaledrone
            channelID="PxJBgQZcZTv6UNgd"
            onConnect={(drone) => console.log("COnnected to ScaleDrone")}
          >
            {users.map((user) => (
              <div key={user.id} style={{ backgroundColor: user.color }}>
                <h2>{user.name}</h2>
                <div className="message-box">
                  {messages
                    .filter((message) => message.userId === user.id)
                    .map((message) => (
                      <div key={message.id} className="message">
                        {message.text}
                      </div>
                    ))}
                </div>
                <form onSubmit={handleSubmitMessage}>
                  <input
                    type="text"
                    value={messageText}
                    onChange={handleInputChange}
                    placeholder="Type your message"
                  />
                  <button type="submit">Send</button>
                </form>
              </div>
            ))}
          </Scaledrone>
        </div>
      </div>
    </div>
  );
}

export default Chat;
