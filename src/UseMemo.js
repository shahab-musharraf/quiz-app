import React, { useCallback, useMemo, useState } from 'react'

// useCallback returns whole function (inside useCallback function) while useMemo return a single value (the only difference)

/*
useMemo :
1. stop re-rendering functions( if performing the same tasks every time) while the re-rendering of the component 
2. Problem Statement: Ek component mein jab bhi states ya props change hote hain woh component re-render hota hai aur agar uss component mein koi function hai jo har rendering mein same value hi de rha hai ya same task kar rha hai but component ke re-rendering ki wajah se woh bhi baar baar chal rha hai, agar woh function ek slow function hai (time taken function) toh ye hamare program ki speed ko kamm kar dega kyu ki same cheez baar baar chal rhi hai component ke re-render hone ki wajah se aur speed kamm ho skta hai jisko optimize krne ke liye hum useMemo ka use kr skte hai.
3. Difference b/w useMemo & useEffect -> useMemo return a value while useEffect doesn't return any value
*/

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    // this function's output is not changing while component's states or props are changing, so we will not let this function run again and again by using useMemo
    // function slowFunc (){
    //     for(let i=0; i<1000000; i++){
    //         console.log("slow function is running")
    //     }
    // }

    const result = useMemo(()=>{
      let sum = 0;
      for(let i=0; i< 10000; i++){
        sum += i;
      }
      console.log(sum)
      return sum;
      
    },[input])

    console.log(result);
    

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=> setCount(count+1)}>Click Me</button>
        <br /><br />
        <input type="text" style={{width: "20%"}} value={input} onChange={(e)=> setInput(e.target.value)}/>
        <h2>Input: {input}</h2>

    </div>
  )
}

export default UseMemo