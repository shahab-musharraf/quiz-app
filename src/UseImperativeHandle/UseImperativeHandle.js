import React from 'react';
import Parent from './Parent';

// UseImperativeHandle is used to send value from child to parent by using useRef

const UseImperativeHandle = () => {

  return (
    <div>
        UseImperativeHandle is used to send value from child to parent by using useRef
        <Parent />
    </div>
  )
}

export default UseImperativeHandle