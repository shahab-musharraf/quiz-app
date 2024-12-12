import React, { useEffect, useRef } from 'react'

const UseRefDOM = () => {
  const inputEl = useRef(null);
  useEffect(()=>{
    inputEl.current.focus();
  })

  const handleFocus = () => {
    inputEl.current.style.backgroundColor ="black";
  }
  const handleBlur = () => {
    inputEl.current.style.backgroundColor ="";
  }
  return (
    <div>
        <input ref={inputEl} type="text" onFocus={handleFocus} onBlur={handleBlur}/>
    </div>
  )
}

export default UseRefDOM