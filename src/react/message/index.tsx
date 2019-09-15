import React from 'react'
import ReactDom from 'react-dom'
import Message, { MessageProps } from './message'

interface MessageObjectProps {
  title: string
  btnText?: string
  onSubmit?: () => void
}

function message (title: string): any
// tslint:disable-next-line:unified-signatures
function message ({ title, btnText, onSubmit }: MessageObjectProps): any
function message (args: (string | MessageObjectProps)) {
  const div = document.createElement('div')
  document.body.appendChild(div)

  let title = ''
  let onSubmit = () => {}
  let btnText = '确认'

  if (typeof args === 'string') {
    title = args
  } else {
    title = args.title
    if (args.btnText) {
      btnText = args.btnText
    }
    if (args.onSubmit) {
      onSubmit = args.onSubmit
    }
  }

  const onUnmount = () => {
    ReactDom.unmountComponentAtNode(div)
    div.parentNode.removeChild(div)
    if (typeof onSubmit === 'function') {
      onSubmit()
    }
  }

  const props: MessageProps = {
    title,
    btnText,
    onUnmount
  }

  ReactDom.render(
    <Message { ...props }/>,
    div
  )
}

export default message