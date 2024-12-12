import React, { useEffect, useState } from 'react';

// this is  a custom hook

const UseFetch = () => {
    const url = "https://api.github.com/users";
    const [users, setUsers] = useState([]);     // iss users ko return karke dusre component mein 'const users = UseFetch()' iss tarah se likh kar users ko access kar skte h

    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((data)=> setUsers(data))
        .catch((error)=> console.error(error))
    },[])
return (
  users
);
}

export default UseFetch