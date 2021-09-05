import {SetStateAction, Dispatch, RefObject, useEffect, useRef, useState} from 'react'

/**
 * 值同步 ref
 * @param initialState
 */
function useSyncRef<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>, RefObject<T>] {
  const [state, setState] = useState<T>(initialState)
  const ref = useRef<T>(state)

  const syncSetState = (val: SetStateAction<T>) => {
    ref.current = typeof val === 'function' ? (val as (prevState: T) => T)(ref.current) : val
    setState(val)
  }

  useEffect(() => {
    ref.current = state
  }, [state])

  return [state, syncSetState, ref]
}

export default useSyncRef