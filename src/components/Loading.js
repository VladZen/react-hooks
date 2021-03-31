import '@styles/components/loading.scss'

const Loading = ({ trigger, children, ...props }) => {
  return trigger
    ? <div className='spinner' {...props}>Loading...</div>
    : children
}

export default Loading
