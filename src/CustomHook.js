import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch'

const CustomHook = () => {
    const users = UseFetch();     // UseFetch() is a custom hook here
  return (
    <div>
        CustomHook
        {
            users.map((user)=> {
                return <li key={user.id}>{user.login}</li>
            })
        }
    </div>
  )
}

export default CustomHook