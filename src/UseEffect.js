import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("we are under use effect");
        return(
          // return is working like cleanup
          // useEffect ke andar return wala logic pahle chalta hai
          ()=>{
            // console.clear()
            console.log("return of use effect")
          }
        )
    },[text]);
  return (
    <div>
        <button onClick={(e)=>setText(e.target.textContent)}>Subscribe</button>
        <br /><hr />
        <button onClick={(e)=>setText(e.target.textContent)}>To</button>
        <br /><hr />
        <button onClick={(e)=>setText(e.target.textContent)}>Shahab</button>
        <h1>{text}</h1>

        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  )
}

export default UseEffect