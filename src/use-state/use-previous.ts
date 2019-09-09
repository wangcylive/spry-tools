import { useRef, useEffect } from 'react'
/**
 * 获取上一次值
 * @param value
 */
const usePrevious = <T>(value: T): T => {
  const ref = useRef<T>(value)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default usePrevious