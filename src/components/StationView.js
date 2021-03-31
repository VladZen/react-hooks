import { startCase, isNull, isUndefined } from 'lodash'

import StationType from '@/types/Station'

import '@styles/components/station-view.scss'

const StationView = ({ station }) => {
  const humanizeValue = (key) => {
    const value = station[key]

    // process null
    if (isNull(value) || isUndefined(value)) return 'Not detected'

    // process enum
    if ([0, 1].includes(value)) return (
      <span className={`text-${value === 1 ? 'positive' : 'negative'}`}>
        { value === 1 ? 'Yes' : 'No'}
      </span>
    )

    // process date
    if (key === 'lastconnect') return new Date(value).toLocaleString()

    // process position
    if (key === 'position') return (
      <a
        className='link-decorated'
        href={`http://www.google.com/maps/place/${value}`}
        target='blank'
        title='Open in new tab'
      >
        Show on the map
      </a>
    )

    // default
    return value
  }

  return (
    <dl className='station-attributes'>
      {
        Object.keys(station).map((key) => (
          <div className='station-attributes__item' key={ key }>
            <dt className='station-attributes__item__label'>{ startCase(key) }</dt>
            <dd className='station-attributes__item__value'>{ humanizeValue(key) }</dd>
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
