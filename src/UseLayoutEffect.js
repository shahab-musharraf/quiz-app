import React, { useEffect, useLayoutEffect } from 'react'

/*
    1. It's is synchronous type
    2. Just similar to useEffect but the only difference is that useEffect is asynchronous type where as useLayoutEffect is synchronous type.
    3. useEffect aur useLayoutEffect ko agar ek component mein define karein toh useLayoutEffect pahle chalega useEffect ke muqable.......
  * 4. Screen par rendered component print hone se pahle hi useLayoutEffect run hota hai jabke Screen par rendered componet print hone ke baad useEffect run hota hai...

*/

const UseLayoutEffect = () => {
    useEffect(()=>{
        console.log("Use Effect Part");
    },[])
    useEffect(()=>{
        console.log("Use Effect Part");
    },[])
    useLayoutEffect(()=>{
        console.log("Use Layout Effect Part");
    },[])
    useEffect(()=>{
        console.log("Use Effect Part");
    },[])
    useEffect(()=>{
        console.log("Use Effect Part");
    },[])
    useLayoutEffect(()=>{
        console.log("Use Layout Effect Part");
    },[])
    useLayoutEffect(()=>{
        console.log("Use Layout Effect Part");
    },[])
    useLayoutEffect(()=>{
        console.log("Use Layout Effect Part");
    },[])
  return (
    <div>UseLayoutEffect</div>
  )
}

export default UseLayoutEffect