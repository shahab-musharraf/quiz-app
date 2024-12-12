import React, { createContext } from 'react';
import D from '../ContextAPI/D';
import C from '../ContextAPI/C';

/*
  1. create a Context                 const MyContext = createContext();

  2. provider // send the data        <MyContext.Provider value = {data}>
                                        <D />
                                      </MyContext.Provider>
                                      export {MyContext}

  3. consumer // receive the data     import MyContext from './Parent';
                                      return(
                                        <MyContext.Consumer>{
                                          (val) => return <h1>value is: {val}</h1>
                                        }
                                        </MyContext.Consumer>

                                      )

                                      or

                                      const myData = useContext(MyContext);
                                      console.log(myData)
*/

const GreetContext1 = createContext();
const GreetContext2 = createContext();

const Parent = () => {
    const greet1 = "Good Night!";
    const greet2 = "Good Afternoon!"
  return (
    <div>
        <h2>I am Parent Component (top level (index.js))</h2>
        <GreetContext1.Provider value={greet1}>   {/*You can pass multiple data in an object in value*/}
          <GreetContext2.Provider value={greet2}>
            <D />     {/* receiving data in a complex way of context API */}
            <C />     {/* receiving data using useContext*/}
          </GreetContext2.Provider>
        </GreetContext1.Provider>
    </div>
  )
}

export default Parent;
export {GreetContext1, GreetContext2}