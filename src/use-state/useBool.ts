import React, {RefObject} from 'react'
import useSyncRef from './useSyncRef'

export interface Handler {
  show(): void
  hide(): void
  change(): void
}

/**
 * bool 值变化封装
 * @param initialValue
 */
function useBool(initialValue: boolean | (() => boolean)): [boolean, Handler, RefObject<boolean>] {
  const [value, syncSetState, ref] = useSyncRef<boolean>(initialValue)
  const show = () => syncSetState(true)
  const hide = () => syncSetState(false)
  const change = () => syncSetState(val => !val)

  const handler: Handler = {
    show,
    hide,
    change,
  }

  return [value, handler, ref]
}

export default useBool
