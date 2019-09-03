import { useState, useRef, useEffect } from 'react'
/**
 * 延迟设置值
 * @param initialState
 */
export const useDelayState = <T>(initialState: any): [ T, (value: any, delay?: number) => any, any ] => {
  const [ state, setState ] = useState<T>(initialState)
  const ref = useRef<any>()
  const delaySetState = (value: any, delay = 200) => {
    ref.current = setTimeout(() => {
      setState(value)
    }, delay)
  }
  useEffect(() => {
    return () => {
      clearTimeout(ref.current)
    }
  }, [])
  return [ state, delaySetState, setState ]
}

export default useDelayState