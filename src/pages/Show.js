import Header from '@components/Header'
import StationView from '@components/StationView'
import Back from '@components/BackButton'

function Index() {
  const station = {
    'station_ID': 101,
    'custom_evse_id': null,
    'location_ID': 101,
    'seller_ID': 27,
    'name': 'Endesa',
    'connected': 1,
    'position': '60.868623,26.702901',
    'available': 0,
    'lastconnect': '2019-02-22T13:35:48.000Z',
    'roaming_identifier_cpo': 'FI*001'
  }

  return (
    <div className='layout'>
      <Header heading={station.name}>
        <Back to='/' />
      </Header>

      <main className='layout__main'>
        <StationView data={station} />
      </main>
    </div>
  )
}

export default Index
