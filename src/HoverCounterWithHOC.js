import React, { useState } from 'react';
import withCounter from './withCounter';

const HoverCounterWithHOC = (props) => {
  return (
    <div>
        <button onMouseOver={props.incrementCount}>Clicked {props.count}</button>
    </div>
  )
}

export default withCounter(HoverCounterWithHOC)