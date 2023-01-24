import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  //states
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskData = await fetchTasks();
      setTasks(taskData);
    };
    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  //Add Task
  const addTask = (title, date, reminder) => {
    const rndNumber = Math.floor(Math.random() * 10000) + 1;
    const newTask = {
      id: rndNumber,
      title: title,
      date: date,
      reminder: reminder,
    };

    setTasks([...tasks, newTask]);
    console.log("addTask func", newTask);
  };
  //Delete Task
  const deleteTask = (id) => {
    // console.log("delete task", id)
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header changeShowAddTask={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTasks addTask={addTask} />}
      {tasks <= 0 ? (
        <p style={{ color: "steelblue" }}>
          No more tasks left, maybe add some!
        </p>
      ) : (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      )}
    </div>
  );
}

export default App;
