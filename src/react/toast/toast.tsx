import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import css from './index.module.scss'

export type Placement = 'middle' | 'top' | 'bottom'

export interface ToastProps {
  message: string
  onUnmount: () => any
  placement?: Placement
}

const defaultProps: Partial<ToastProps> = {
  placement: 'middle'
}

const Toast: React.FC<ToastProps> = (props) => {
  const [ visible, setVisible ] = useState<boolean>(false)
  const ref = useRef<number>()
  const onUnmount = () => {
    window.clearTimeout(ref.current)
    props.onUnmount()
  }

  useEffect(() => {
    setVisible(true)

    document.body.addEventListener('click', onUnmount, false)
    document.body.addEventListener('touchend', onUnmount, false)

    ref.current = window.setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => {
      document.body.removeEventListener('click', onUnmount, false)
      document.body.removeEventListener('touchend', onUnmount, false)
    }
  }, [])

  const moduleClassName = [ css.module ]
  switch (props.placement) {
    case 'bottom':
      moduleClassName.push(css.bottom)
      break
    case 'middle':
      moduleClassName.push(css.middle)
      break
    case 'top':
      moduleClassName.push(css.top)
  }

  return (
    <CSSTransition in={visible} timeout={{ enter: 300, exit: 100 }}
                   unmountOnExit={true} classNames="toast" onExited={onUnmount}>
      <div className={moduleClassName.join(' ')}>
        <div className={css.content}>{props.message}</div>
      </div>
    </CSSTransition>
  )
}

Toast.defaultProps = defaultProps

export default Toast