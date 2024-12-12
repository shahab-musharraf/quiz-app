import React, { createContext } from 'react'
import B from './B'


const A = (props) => {
  return (
    <div>
        A: {props.data}
        <B data={props.data}/>
    </div>
  )
}

export default A