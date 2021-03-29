import Enum from '@/types/PropTypeEnum'

import Icon from '@/components/Icon'

const StationStatus = ({ available }) => {
  const status = available
    ? 'available'
    : 'offline'

  return (
    <span className='stations__item__status stations__item__status--offline'>
      <Icon
        alias={ status }
        className='stations__item__status__icon'
      />

      <span className='text-capitalize'>
        { status }
      </span>
    </span>
  )
}

StationStatus.propTypes = {
  available: Enum()
}

export default StationStatus
