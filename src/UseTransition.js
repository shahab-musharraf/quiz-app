import React, { useState, useTransition } from 'react'; 

/*
  1. agar ek input box hai aur uss mein hum jo bhi type kar rhe hain usko 20000 baar niche show karna hai.. jaise jaise hum type karenge waise waise value 20000 baar niche show hogi lekin iss mein kaafi time lagega kyu ki 20000 baar ek sath hi show hogi, pahle 20000 baar woh build hogi phir show hogi jiske wajah se hum easily type nhi kar paayenge. jab bhi hum input mein type krenge hamein wait krna hoga pahle 20000 baar show hone ka phir hum next character type kar paayenge.

  2. useTransition() ko use krne ke baad hum input mein easily type kar paayenge aur niche apna der sawer render hota rhega, hamein wait nhi karna padega 20000 show hone ka, hum apna easily type kar skenge!

  3.  const [isPending, startTransition] = useTransition();
      isPending -> variable
      startTransition => function 
*/


const UseTransition = () => {

  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);
  const [isPending, startTransition] = useTransition();
  const LIST_SIZE = 20000;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(()=>{
      const dataList = [];
    for(let i=0; i<LIST_SIZE; i++){
      dataList.push(value)
    }
    setLists(dataList);
    })
  }
  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange}/>
      {
        isPending ? <p>Loading...</p> : lists.map((item, idx)=>{
          return <div key={idx}>{item}</div>
        })
      }
    </div>
  )
}

export default UseTransition