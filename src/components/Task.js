import {TiDelete} from 'react-icons/ti'

const Task = ({task}) => {
  return (
    <div className="task">
      <h3>{task.title}
      <TiDelete style={{color: 'red'}}/>
      </h3>
      
      <p>{task.date}</p>
    </div>
  )
}
export default Task