import React from 'react';
import useSyncRef from '@/use-state/useSyncRef';

const Demo1: React.FC = () => {
  const [state, syncSetState, refState] = useSyncRef<number>(0)

  const onAdd = () => {
    syncSetState((val) => val + 1)
    console.log('add', refState.current)
  }

  const onDel = () => {
    syncSetState((val) => val - 1)
    console.log('del', refState.current)
  }

  return <div>
    <h3>useSyncRef</h3>
    <code>{state}</code>
    <button onClick={onAdd}>+</button>
    <button onClick={onDel}>-</button>
  </div>
}

export default Demo1
