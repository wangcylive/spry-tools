import React from 'react'

export interface Props {
  className?: string
}
const Select: React.FC<Props> = (props) => {
  return <div className={props.className}>select</div>
}

export default Select