import '@styles/components/loading.scss'

const Loading = ({ trigger, children, ...props }) => {
  const properties = {
    ...props,
    className: props.className
      ? `spinner ${props.className}`
      : 'spinner'
  }

  return trigger
    ? <div {...properties}>Loading...</div>
    : children
}

export default Loading
