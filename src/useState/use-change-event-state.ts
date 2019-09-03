import { ChangeEvent, useState } from 'react'

export type Modify = 'trim' | 'number' | any

/**
 * onChange Event state
 * @param initialState
 * @param modify
 */
const useChangeEventState = (initialState: any, modify: Modify):
  [ string | number, (event: ChangeEvent) => any, any ] => {
  const [ value, setValue ] = useState(initialState)
  const changeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    let value: string | number = event.target.value
    if (modify === 'trim') {
      value = value.trim()
    } else if (modify === 'number') {
      value = Number(value)
    }
    setValue(value)
  }
  return [ value, changeEvent, setValue ]
}

export default useChangeEventState