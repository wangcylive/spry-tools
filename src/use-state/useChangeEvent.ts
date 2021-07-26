import {ChangeEvent, Dispatch, useState} from 'react'

export type Modify = 'trim' | 'number'

/**
 * onChange Event state
 * @param initialState
 * @param modify
 */
function useChangeEvent<T>(
  initialState: T | (() => T),
  modify?: Modify,
): [T, (event: ChangeEvent) => void, Dispatch<T>] {
  const [value, setValue] = useState(initialState)
  const changeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    let value: string | number = event.target.value
    if (modify === 'trim') {
      value = value.trim()
    } else if (modify === 'number') {
      value = Number(value)
    }
    setValue(value)
  }
  return [value, changeEvent, setValue]
}

export default useChangeEvent
