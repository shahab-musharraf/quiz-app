import React, { useEffect, useRef, useState } from 'react';

/*
    1. give reference of a variable.
    2. give a object with a property "current" as a reference 
    3. changing in useRef will never re-render the Component
    4. Jab state ya props mein change hoga tab hi re render hoga
    5. useeffect mein agar state ya props ki value change nhi hogi toh useeffect nhi chalega aur jab useEffect ke andar useRef ki value change hogi tab hi useEffect chalega!
    6**. jab state mein change hoga toh useEffect ek baar chalega jisse useRef update hoga, agar useEffect ke andar hum useState ke count ko daal dein toh state mein change hone ki wajah se useEffect ek baar chalega aur useEffect ke andar jo count update hoga uski wajah se useEffect phir se chalega aur aise hi loop mein phas jaayega kyu ki count ek useState ke andar hai jo ke state hai jab ke useRef state nhi hai isi liye hum count ko useRef ki madad se banaayenge aur useEffect ke andar useRef wale count ko use karenge jisse ki jab bhi component mein state mein change hoga toh useEffect ke andar count ki value sirf ek baar update hogi aur chuke ye count state nhi hai isi liye dobara useEffect nhi chalega.
*/

const UseRef = () => {
    const [input, setInput] = useState("");
    // const [count, setCount] = useState(0);
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current+1;
    })
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <h2>Component rendered: {count.current} times</h2>
    </div>
  )
}

export default UseRef