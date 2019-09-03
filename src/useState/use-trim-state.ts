import { useState } from 'react'

const useTrimState = (initialState: any): [ string, (value: string) => any, any ] => {
  const [ state, setState ] = useState<string>(initialState)
  const setStateTrim = (value: string) => setState(value.trim())
  return [ state, setStateTrim, setState ]
}

export default useTrimState