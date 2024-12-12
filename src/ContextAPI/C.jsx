import React, { useContext } from 'react';

import {GreetContext1, GreetContext2} from './Parent';


const C = () => {
  const myData = useContext(GreetContext1);
  const myData2 = useContext(GreetContext2);
  return (
    <div>
      <h2>Hello from C Component</h2>
      <h1>Greet1: {myData}</h1>
      <h1>Greet2: {myData2}</h1>

    </div>
  )
}

export default C