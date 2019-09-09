import React, { useState } from 'react'

export interface Handler {
  show: () => any,
  hide: () => any,
  change: () => any
}

function useBoolHandlerState(initialValue: boolean): [ boolean, Handler ] {
  const [ value, setValue ] = useState<boolean>(initialValue)
  const show = () => setValue(true)
  const hide = () => setValue(false)
  const change = () => setValue((val) => !val)

  const handler: Handler = {
    show,
    hide,
    change
  }

  return [ value, handler ]
}

export default useBoolHandlerState