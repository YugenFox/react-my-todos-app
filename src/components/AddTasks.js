import { useState } from "react";

const AddTasks = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    reminder: false,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //check if they filled out title
    if (formData.title === "".trim()) {
      alert("Fill out the title to add a task");
      return;
    }
    console.log("Trying to submit new task");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Title</label>
        <input
          type="text"
          placeholder="boi add a task description!"
          value={formData.title}
          onChange={handleInputChange}
          name="title"
        />
      </div>
      <div className="form-control">
        <label>Task Date</label>
        <input
          type="text"
          placeholder="boi add a task date!"
          value={formData.date}
          onChange={handleInputChange}
          name="date"
        />
      </div>
      <div className="form-control-check">
        <label>Task Reminder</label>
        <input
          type="checkbox"
          placeholder="boi add a task description!"
          value={formData.reminder}
          onChange={handleInputChange}
          name="reminder"
        />
      </div>

      <input
        className="btn btn-block"
        type="submit"
        value="Submit Task"
      ></input>
    </form>
  );
};
export default AddTasks;
