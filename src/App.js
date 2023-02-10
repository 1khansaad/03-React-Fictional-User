import React, { useState } from "react";
import AddUser from "./components/addUser/addUser";
import UserList from "./components/userList/UserList";

const userData = [];

function App() {
  const [currentState, setCurrentState] = useState(userData);
  const dataHandler = (user) => {
    setCurrentState((old) => [user, ...old]);
    userData.push(user);
    console.log(userData);
  };
  return (
    <div>
      <AddUser dataFun={dataHandler} />
      <UserList users={currentState} />
    </div>
  );
}

export default App;
