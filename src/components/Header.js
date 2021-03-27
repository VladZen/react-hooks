import PropTypes from 'prop-types'
import Icon from "./Icon";

const Header = ({ heading }) => {
  return (
    <header className='layout__header'>
      <h1>{ heading }</h1>
    </header>
  )
}

Header.defaultProps = {
  heading: ''
}

Header.propTypes = {
  heading: PropTypes.string
}

export default Header
