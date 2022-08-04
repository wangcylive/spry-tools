import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react'

/**
 * 值同步 ref
 * @param initialState
 */
function useSyncRef<T>(initialState: T | (() => T)): [T, React.Dispatch<SetStateAction<T>>, React.RefObject<T>] {
  const [state, setState] = useState<T>(initialState)
  const ref = useRef<T>(state)

  const syncSetState = (val: SetStateAction<T>) => {
    if (typeof val === 'function') {
      setState(prevState => {
        const nextState = (val as (prevState: T) => T)(prevState)
        ref.current = nextState
        return nextState
      })
    } else {
      setState(val)
      ref.current = val
    }
  }

  useEffect(() => {
    ref.current = state
  }, [state])

  return [state, syncSetState, ref]
}

export default useSyncRef
