import StationType from '@/types/Station'

import '@styles/components/station-view.scss'

const StationView = ({ station }) => {
  return (
    <dl className='station-attributes'>
      {
        Object.keys(station).map((key) => (
          <div className='station-attributes__item' key={ key }>
            <dt className='station-attributes__item__label'>{ key }</dt>
            <dd className='station-attributes__item__value'>{ `${station[key]}` }</dd>
          </div>
        ))
      }
    </dl>
  )
}

StationView.propTypes = {
  station: StationType
}

export default StationView
