import axios from "axios";
import UsersList from "./UsersList";
import { useEffect, useState } from "react";

const Users = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((promise) => setUsers(promise.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        borderStyle: "solid",
        borderColor: "lightblue",
        margin: "5px",
        marginBottom: "480px",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          borderStyle: "solid",
          borderColor: "lightblue",
          margin: "5px",
        }}
      >
        Users List
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          borderStyle: "solid",
          borderColor: "lightblue",
          margin: "5px",
          padding: "15px",
        }}
      >
        {users.map((user) => (
          <UsersList key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
