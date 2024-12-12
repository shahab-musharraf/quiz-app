import React from 'react';
import { GreetContext1, GreetContext2 } from './Parent';

// It's a complex way of ContextAPI
// we can do same thing using useContext to optimize the code, we will pass data using useContext from Parent to C Component

const D = () => {
  return (
    <div>
      Hello From D Component
      <GreetContext1.Consumer>
      {
        (val1) => {
          return (
            <GreetContext2.Consumer>
              {
                (val2) => {
                  return (
                    <div>
                    <h1>Greet1: {val1}</h1>
                    <h1>Greet2: {val2}</h1>
                    </div>
                  )
                }
              }
            </GreetContext2.Consumer>
          )
        }
      }
        
      </GreetContext1.Consumer>
    </div>
  )
}

export default D