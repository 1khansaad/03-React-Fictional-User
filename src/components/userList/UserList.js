import "./UserList.module.css";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div>
      {props.users.length === 0 ? (
        <h3 className={classes.instruction}>Add First User To Your List!</h3>
      ) : (
        <Card className={classes.users}>
          <ul className={classes.ul}>
            {props.users.map((user, i) => (
              <li className={classes.li} key={i}>
                {user.name} is {user.age} Year old.
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default UserList;
