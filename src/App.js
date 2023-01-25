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
  const addTask = async (title, date, reminder) => {
    // const rndNumber = Math.floor(Math.random() * 10000) + 1;
    const newTask = {
      title: title,
      date: date,
      reminder: reminder,
    };

    //do POST request
    const postTask = async () => {
      await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      //updates local state after post
      const data = await fetchTasks();
      setTasks(data);
    };
    postTask();

    // setTasks([...tasks, newTask]);

    console.log("addTask func", newTask);
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    const data = await fetchTasks();
    setTasks(data);
    // console.log("delete task", id)
    // setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder on Task - highlight if true
  const toggleReminder = (id) => {
    console.log("toggle reminder on", id)
  }

  return (
    <div className="container">
      <Header changeShowAddTask={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTasks addTask={addTask} />}
      {tasks <= 0 ? (
        <p style={{ color: "steelblue" }}>
          No more tasks left, maybe add some!
        </p>
      ) : (
        <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
      )}
    </div>
  );
}

export default App;
