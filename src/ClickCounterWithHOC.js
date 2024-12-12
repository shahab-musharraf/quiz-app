import React from 'react';
import withCounter from './withCounter';


const ClickCounterWithHOC = (props) => {
  return (
    <div>
      <button onClick={props.incrementCount}>Click {count}</button>
    </div>
  )
}

export default withCounter(ClickCounterWithHOC);