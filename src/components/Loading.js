const Loading = ({ trigger, children, ...props }) => {
  return trigger
    ? <div {...props}>Loading stations...</div>
    : children
}

export default Loading
