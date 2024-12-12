import React from 'react'
import C from './C'

const B = (props) => {
  return (
    <div>
        B: {props.data}
        <C data= {props.data} />
    </div>
  )
}

export default B