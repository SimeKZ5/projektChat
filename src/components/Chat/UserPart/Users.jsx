import React, { useContext } from "react";
import HeaderUser from "./HeaderUser";
import { UserContext } from "../../Login/UserContext";

function Users() {
  const { users, removeUser } = useContext(UserContext);

  const handleDelete = (userId) => {
    removeUser(userId);
  };

  return (
    <div className="mr-10 border-4 border-cyan-800 rounded">
      <HeaderUser />
      <div className="w-36 h-96 bg-red-800">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <button
                onClick={() => handleDelete(user.id)}
                className="ml-2 bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
