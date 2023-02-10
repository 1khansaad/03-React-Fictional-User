import React from "react";
import AddUser from "./components/addUser/addUser";
import UserList from "./components/userList/UserList";

const array = [
  {
    name: "saad",
    age: 21,
  },
];
function App() {
  return (
    <div>
      <AddUser />
      <UserList users={array} />
    </div>
  );
}

export default App;
