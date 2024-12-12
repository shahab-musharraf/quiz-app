import React from 'react';
import ClickCounterWithHOC from './ClickCounterWithHOC';
import HoverCounterWithHOC from './HoverCounterWithHOC';

//  const EnhancedComponent = higherOrderComponent(OriginalComponent);

//  withCounter component is a higherOrderComponent because it provides the common function to different different component;

const HigherOrderComponent = () => {
  return (
    <div>
        <ClickCounterWithHOC />
        <HoverCounterWithHOC />
    </div>
  )
}

export default HigherOrderComponent

