import '@styles/components/back-button.scss'

import { Link } from 'react-router-dom'

import Icon from '@components/Icon'

const BackButton = (props) => {
  return (
    <Link
      className='back-button'
      {...props}
    >
      <Icon
        alias='arrow'
        className='back-button__icon'
      />
    </Link>
  )
}

export default BackButton
