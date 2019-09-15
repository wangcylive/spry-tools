import React from 'react'
import ReactDOM from 'react-dom'
import Toast, { ToastProps, Placement } from './toast'

function toast(message: string, placement: Placement = 'middle') {
  const div = document.createElement('div')

  document.body.appendChild(div)

  const onUnmount = () => {
    ReactDOM.unmountComponentAtNode(div)
    div.parentElement.removeChild(div)
  }

  const props: ToastProps = {
    message,
    onUnmount,
    placement
  }

  ReactDOM.render(
    React.createElement(Toast, props),
    div
  )
}

export default toast