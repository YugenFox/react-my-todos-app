import { useState } from 'react';
import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks';


function App() {
  //states
  const [tasks,setTasks] = useState([
    {
      id: 1,
      title: 'Wake up',
      date: 'Jan 23rd',
      reminder: true,
    },
    {
      id: 2,
      title: 'Eat',
      date: 'Jan 23rd',
      reminder: true,
    },
    {
      id: 3,
      title: 'Code',
      date: 'Jan 23rd',
      reminder: false,
    },
  ])

  //Add Task

  //Delete Task


  return (
    <div className="container">
    <Header />
    {/* {tasks.map((task) => (
      <h3>Hello</h3>
    ))} */}
    <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
