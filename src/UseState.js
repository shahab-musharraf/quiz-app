import React, { useState } from 'react'

const UseState = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='Enter Name' value={input.name} onChange={handleInput}/>
            <input type="email" name="email" placeholder='Enter Email' value={input.email} onChange={handleInput}/>
            <input type="password" name="password" placeholder='Enter Password' value={input.password} onChange={handleInput}/>
            <button type="submit">Submit Now</button>
        </form>
    </div>
  )
}

export default UseState