import PropTypes from 'prop-types'

import sprite from '@images/sprite.svg'

const Icon = ({ alias, className }) => {
  return (
    <svg className={ className }>
      <use href={ `${sprite}#${alias}` }></use>
    </svg>
  )
}

Icon.defaultProps = {
  alias: '',
  className: ''
}

Icon.propTypes = {
  alias: PropTypes.string, // could be improved to support a list of items declared in sprite, but it could be hardly maintainable with the growth of the project
  className: PropTypes.string
}

export default Icon
