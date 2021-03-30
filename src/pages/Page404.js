import Header from '@/components/Header'
import Back from '@/components/BackButton'

const Page404 = () => {
  return (
    <div className='layout'>
      <Header
        className='text-center'
        heading='Page Not Found'
      >
        <Back
          to='/'
          title='Back to the list'
        />
      </Header>
    </div>
  )
}

export default Page404
