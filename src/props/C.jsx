import React from 'react'
import D from './D'

const C = (props) => {
  return (
    <div>
        C: {props.data}
        <D data= {props.data} />

    </div>
  )
}

export default C