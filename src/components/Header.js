import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <button className='btn'>Add Task</button>
    </div>
  )
}

// Prop Types
Header.propTypes = {
  title: PropTypes.string,
}
//Prop Defaults
Header.defaultProps = {
  title: "My Todos",
}


export default Header