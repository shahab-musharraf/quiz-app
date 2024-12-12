import React, { useReducer, useState } from 'react'

/*
    1. Use to manage the complex states
    2. const [state, dispatch] = useReducer(reducer, initialState)
        const handleClick = () => {
            dispatch({type: "incr"})
        }
    3. const reducer = (state, action) => {
        if(action.type === ''){
            return {                    // whatever u return here, will become the state value
                count: state.count+1
            }
        } 
    }
*/

const UseReducer = () => {
    // const [count, setCount] = useState(0);

    const reducer = (state, action) => {
        if(action.type === "incr") {
            return {
                count: state.count+1
            }
        }
        if(action.type === "decr") {
            return {
                count: state.count-1
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0});


    const handleIncr = () => dispatch({type : "incr"})
    const handleDecr = () => dispatch({type : "decr"})
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={handleIncr}>+</button>
        <button onClick={handleDecr}>-</button>

    </div>
  )
}

export default UseReducer