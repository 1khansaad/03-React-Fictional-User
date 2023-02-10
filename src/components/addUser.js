const AddUser = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">UserName!</label>
        <input type="text" id="username"></input>
        <label htmlFor="age">Age(years)</label>
        <input type="number" id="age"></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
