import React, { useEffect, useState } from 'react'

const MultipleReturn = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(()=>{
        const fetchUsers = async ()=> {
            try {
                const response = await fetch('https://api.github.com/users')
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        fetchUsers();
        


    },[])
    if(isLoading) {
        return <li>Loading...</li>
    }
    if(error){
        return <li>Error: {error.message}</li>
    }
    
  return (
    <div>
        <ul>
            {
                users.map((data,idx)=>{
                    return <li key={data.id}>{data.login}</li>
                })
            }
        </ul>
    </div>
  )
}

export default MultipleReturn