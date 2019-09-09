import { useReducer } from 'react'

function useForceUpdate (): () => any {
  const [ ignored, dispatch ] = useReducer(x => x + 1, 0)

  return () => dispatch(0)
}

export default useForceUpdate