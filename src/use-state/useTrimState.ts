import {useState, Dispatch} from 'react'

function useTrimState(initialValue: string | (() => string)): [string, (value: string) => void, Dispatch<string>] {
  const [state, setState] = useState<string>(initialValue)
  const setStateTrim = (value: string) => setState(value.trim())
  return [state, setStateTrim, setState]
}

export default useTrimState
