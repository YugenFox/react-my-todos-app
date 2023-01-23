import { TiDelete } from "react-icons/ti";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h3>
        {task.title}
        <TiDelete
          style={{ color: "red" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>

      <p>{task.date}</p>
    </div>
  );
};
export default Task;
