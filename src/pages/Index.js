import Header from '@components/Header'
import StationsList from '@components/stations-list/StationsList'

function Index() {
  return (
    <div className='layout'>
      <Header heading='Your stations' />

      <main className='layout__main'>
        <StationsList />
      </main>
    </div>
  )
}

export default Index
