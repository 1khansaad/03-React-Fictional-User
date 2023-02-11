import classes from "./Error.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import React from "react";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.fun}></div>;
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.fun}>Okay</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default ErrorModal;
