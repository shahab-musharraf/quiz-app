import React, { useEffect, useState } from 'react'

const FetchingWithUseEffect = () => {

    const [datas, setDatas] = useState([]);
    
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then((response)=>response.json())
        .then(data => setDatas(data))
        .catch((error)=> console.error(error.message))
    },[])
    
  return (
    <div>
    
        <h1>Users List</h1>
        <ul>
            {
                datas.length > 0 ? (datas.map((data,idx)=>{
                    return <li key={data.id}>
                        <a href={data.html_url} target='_blank'>{data.login}</a>
                    </li>
                })) : <h1>Loading...</h1>
            }
        </ul>
    </div>
  )
}

export default FetchingWithUseEffect