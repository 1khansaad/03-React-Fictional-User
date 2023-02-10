import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./addUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [currentUserName, setUserName] = useState("");
  const setUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const [currentUserAge, setUserAge] = useState("");
  const setUserAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(currentUserAge, currentUserName);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">UserName!</label>
        <input type="text" id="username" onChange={setUserNameHandler}></input>
        <label htmlFor="age">Age(years)</label>
        <input type="number" id="age" onChange={setUserAgeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
