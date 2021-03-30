import PropTypes from 'prop-types'

const Header = ({ heading, children }) => {
  const buttons = children
    ? <div className='layout__header__buttons'>{ children }</div>
    : ''

  return (
    <header className='layout__header'>
      { buttons }
      <h1
        className='text-ellipsis'
        title={ heading }
      >
        { heading }
      </h1>
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
