import React, { useEffect, useRef, useState } from 'react'

/**
 * 值同步 ref
 * @param initialValue
 */
function useSyncRefState<T>(initialValue: any): [ T, React.Dispatch<T>, React.RefObject<T> ] {
  const ref = useRef<T>(initialValue)
  const [ state, setState ] = useState<T>(initialValue)

  const syncSetState = (val: T) => {
    setState(val)
    ref.current = val
  }

  useEffect(() => {
    ref.current = state
  }, [ state ])

  return [ state, syncSetState, ref ]
}

export default useSyncRefState