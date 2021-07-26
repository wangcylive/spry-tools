import {useState, useRef, useEffect, Dispatch} from 'react'

/**
 * 延迟设置值
 * @param initialState
 */
function useDelayState<T>(
  initialState: T | (() => T),
): [T, (value: T | (() => T), delay?: number) => void, Dispatch<T>] {
  const [state, setState] = useState<T>(initialState)
  const refTimeoutID = useRef<number>(-1)
  const delaySetState = (value: T | (() => T), delay = 200) => {
    refTimeoutID.current = window.setTimeout(() => {
      setState(value)
    }, delay)
  }
  useEffect(() => {
    return () => {
      clearTimeout(refTimeoutID.current)
    }
  }, [])
  return [state, delaySetState, setState]
}

export default useDelayState
