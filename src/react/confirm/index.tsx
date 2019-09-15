import React from 'react'
import ReactDOM from 'react-dom'
import Confirm from './confirm'

/**
 * confirm 确认
 * @param title {string}
 * @returns {Promise<any>}
 */
async function confirm (title: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const unMount = () => {
      ReactDOM.unmountComponentAtNode(div)
      div.parentNode.removeChild(div)
    }

    const onSubmit = () => {
      unMount()
      resolve()
    }
    const onCancel = () => {
      unMount()
      reject()
    }

    const props = {
      onSubmit,
      onCancel,
      title
    }

    ReactDOM.render(
      <Confirm { ...props }/>,
      div
    )
  })
}

export default confirm