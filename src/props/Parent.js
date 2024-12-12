import React from 'react'
import A from './A';

/*
PARENT
Component A
Component B
Component C
Component D 

We can send data directly from A to D using Context API without using props. 
*/

const Parent = () => {
    const age = 22;
  return (
    <div><A data={age}/></div>
  )
}

export default Parent;