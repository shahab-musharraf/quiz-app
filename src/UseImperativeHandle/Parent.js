import React, { useRef } from 'react';
import Child from './Child';

const Parent = () => {
    const childRef = useRef(null);
    const handleOpenModal = (val) => {
        childRef.current.openModal(val);
    }
  return (
    <div>
        <p>This is Parent Component</p>
        <Child ref={childRef} />
        <button onClick={()=>handleOpenModal(true)}>Open Modal</button>
    </div>

  )
}

export default Parent