import { useState } from 'react';
import './index.css'
import Header from './components/Header'


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


  return (
    <div className="container">
    <Header />
    </div>
  );
}

export default App;
