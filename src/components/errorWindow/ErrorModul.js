import classes from "./Error.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  const modalHendler = () => {
    props.fun(false);
  };
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={modalHendler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
