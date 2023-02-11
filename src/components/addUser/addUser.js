import React, { useState, Ref, useRef } from "react";
import Card from "../UI/Card";
import classes from "./addUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../errorWindow/ErrorModul";

const AddUser = (props) => {
  const nameRef = useRef();
  const ageRef = useRef();

  const [currentsSate, setState] = useState(false);
  const setStateHandler = (e) => {
    setState(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;

    if (name.trim().length === 0 || age.trim().length === 0) {
      setState(true);
      return;
    }
    if (+age < 0) {
      setState(true);
      return;
    }

    props.dataFun({
      name: name,
      age: age,
    });
    console.log(ageRef);
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  return (
    <React.Fragment>
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
          <input type="text" id="username" ref={nameRef}></input>
          <label htmlFor="age">Age(years)</label>
          <input type="number" id="age" ref={ageRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
