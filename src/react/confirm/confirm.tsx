import React from 'react'
import styles from './index.module.scss'

export interface ConfirmProps {
  title: string,
  onSubmit: () => void,
  onCancel: () => void
}

const Confirm: React.FC<ConfirmProps> = (props) => {
  const { title, onCancel, onSubmit } = props

  return (
    <div className={styles.dialog}>
      <div className={styles.overlay}/>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.handle}>
            <button className={styles.btn} onClick={onCancel}>取消</button>
            <button className={styles.btn} onClick={onSubmit}>确认</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm