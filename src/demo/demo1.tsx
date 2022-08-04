import React, {useEffect, useRef} from 'react';
import useSyncRef from '@/use-state/useSyncRef';
import cans from '@/canvas/canvas-annulus'


const Demo1: React.FC = () => {
  const [state, syncSetState, refState] = useSyncRef<number>(0)
  const [arr, syncSetArr, refArr] = useSyncRef<number[]>([])
  const el = useRef()

  const onAdd = () => {
    syncSetState((val) => val + 1)
    console.log('add', refState.current)
  }

  const onDel = () => {
    syncSetState((val) => val - 1)
    console.log('del', refState.current)
  }

  const onPush = () => {
    syncSetArr(val => {
      const newVal = new Set(val)
      newVal.add(Math.floor(Math.random() * 8))
      return [...newVal]
    })
  }

  useEffect(() => {
    const s = cans()
    el.current?.appendChild(s.el)
    s.draw(40, 1000)
  }, [])

  return <div>
    <h3>useSyncRef</h3>
    <code>{state}</code>
    <div ref={el}></div>
    <button onClick={onAdd}>+</button>
    <button onClick={onDel}>-</button>
    <hr/>
    <div>{arr.join(',')}</div>
    <button onClick={onPush}>Push</button>
  </div>
}

export default Demo1
