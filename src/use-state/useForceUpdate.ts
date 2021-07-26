import {useReducer, DispatchWithoutAction} from 'react'

function useForceUpdate(): DispatchWithoutAction {
  const [ignored, dispatch] = useReducer(x => x + 1, 0)

  return () => dispatch()
}

export default useForceUpdate
