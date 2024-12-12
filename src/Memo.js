import React, { useState } from 'react'
import FaaltuComponent from './FaaltuComponent';

/*
Memo :
1. Memo is used to optimize performance
2. No re-rendering if no change in component
3. Components will only be re-rendered if the states or props will be changing
4. Problem Statement -> Component ke states ya props mein change ho toh ye component re render hota hai jiski wajah se child component bhi re render ho jata hai bhale hi child component mein kuch bhi change na ho. Iski wajah se kahi na kahi hamare program ke speed mein farq aata hai jisko hum optimize kar skte hain "export default React.memo(ChildComponent)" ka use karke. Isko use krne ke baad child component tab hi re render hoga jab usme koi bhi change ho warna ye child component re render nhi hoga bhale hi parent component ke states ya props mein change aaye!
*/

const Memo = () => {
    const [count, setCount] = useState(0);
    const [detail, setDetail] = useState("")

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=> setCount(count+1)}>+</button>
        <button onClick={()=> setCount(count-1)}>-</button>

        <br /><hr />
        <input type="text" value={detail} onChange={(e)=>setDetail(e.target.value)} />

        <FaaltuComponent count={count}/>
    </div>

  )
}

export default Memo