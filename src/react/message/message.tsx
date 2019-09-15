import React from 'react'
import css from './index.module.scss'

export interface MessageProps {
  title: string
  onUnmount: () => void
  btnText: string
}

const Message: React.FC<MessageProps> = (props) => {
  const { title, btnText, onUnmount } = props
  return (
    <div className={css.module}>
      <div className={css.overlay}/>
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.title}>{title}</div>
          <div className={css.handle}>
            <button className={css.btn} onClick={onUnmount}>{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message