import "./UserList.module.css";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul className={classes.ul}>
        {props.users.map((user, i) => (
          <li className={classes.li} key={i}>
            {user.name} is {user.age} Year old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
