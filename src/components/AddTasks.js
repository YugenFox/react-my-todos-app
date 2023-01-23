const AddTasks = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task Title</label>
        <input type="text" placeholder="boi add a task description!" />
      </div>
      <div className="form-control">
        <label>Task Date</label>
        <input type="text" placeholder="boi add a task date!" />
      </div>
      <div className="form-control-check">
        <label>Task Reminder</label>
        <input type="checkbox" placeholder="boi add a task description!" />
      </div>
    </form>
  );
};
export default AddTasks;
