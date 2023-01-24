import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  //states
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Wake up",
      date: "Jan 23rd",
      reminder: true,
    },
    {
      id: 2,
      title: "Eat",
      date: "Jan 23rd",
      reminder: true,
    },
    {
      id: 3,
      title: "Code",
      date: "Jan 23rd",
      reminder: false,
    },
  ]);

  const [showAddTask,setShowAddTask] = useState(false)

  //Add Task
  const addTask = (title, date, reminder) => {
    const rndNumber = Math.floor(Math.random() * 10000) + 1;
    const newTask = {
      id: rndNumber ,
      title: title ,
      date: date ,
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
      <Header changeShowAddTask={()=> setShowAddTask(!showAddTask)}/>
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
