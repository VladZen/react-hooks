import '@styles/components/back-button.scss'

import { Link } from 'react-router-dom'

import Icon from '@components/Icon'

const BackButton = () => {
  return (
    <Link
      className='back-button'
      to='/'
    >
      <Icon
        alias='arrow'
        className='back-button__icon'
      />
    </Link>
  )
}

export default BackButton
