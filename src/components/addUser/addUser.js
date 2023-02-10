import Card from "../UI/Card";
import classes from "./addUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">UserName!</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age(years)</label>
        <input type="number" id="age"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
