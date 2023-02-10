import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./addUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../errorWindow/ErrorModul";

const AddUser = (props) => {
  const [currentUserName, setUserName] = useState("");
  const setUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const [currentUserAge, setUserAge] = useState("");
  const setUserAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const [currentsSate, setState] = useState(false);
  const setStateHandler = (e) => {
    setState(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (
      currentUserName.trim().length === 0 ||
      currentUserAge.trim().length === 0
    ) {
      setState(true);
      return;
    }
    if (+currentUserAge < 0) {
      setState(true);
      return;
    }

    props.dataFun({
      name: currentUserName,
      age: currentUserAge,
    });

    setUserAge("");
    setUserName("");
  };
  return (
    <div>
      {currentsSate === true ? (
        <ErrorModal
          fun={setStateHandler}
          title="An error occured!"
          message="something went wrong!"
        />
      ) : (
        ""
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">UserName!</label>
          <input
            type="text"
            id="username"
            value={currentUserName}
            onChange={setUserNameHandler}
          ></input>
          <label htmlFor="age">Age(years)</label>
          <input
            type="number"
            id="age"
            value={currentUserAge}
            onChange={setUserAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
