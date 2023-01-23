import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button text="Add Task" color="green"/>
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