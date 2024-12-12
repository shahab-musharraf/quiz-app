import React, { useReducer } from 'react'

/*
    Fetching Data using useReducer
*/
const fetch_url = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    data: [],
    isLoading: false,
    error: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_DATA_START": 
            return {
                ...state,
                isLoading: true,
            }
        case "FETCH_DATA_SUCCESS":
            return {
                data: action.payload,
                isLoading: false,
                error: null
            }
        case "FETCH_DATA_FAILED":
            return {
                data: [],
                isLoading: false,
                error: action.payload
            }
        case "DELETE_DATA":
            return {
                ...state,
                data: state.data.filter((item)=> item.id !== action.payload)
            }
        case "ADD_DATA":
            return {
                ...state,
                data: [...state.data, action.payload]

            }
    }
}

const UseReducer2 = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const fetchData = async () => {
        dispatch({type: "FETCH_DATA_START"});
        try{
            const response = await fetch(fetch_url);
            const data = await response.json();
            dispatch({type: "FETCH_DATA_SUCCESS", payload: data});
            console.log(data);
        }
        catch(error) {
            dispatch({type: "FETCH_DATA_FAILED", payload: error.message})
            console.log(error.message)
        }
    }

    if(state.isLoading){
        return <p>Loading...</p>
    }
    if(state.error){
        return <p>Something went wrong...</p>
    }

    const deleteData = (id) => {
        dispatch({type: "DELETE_DATA", payload: id});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: e.target.title.value,
            id: Date.now()
        }
        dispatch({type: "ADD_DATA", payload: data})
    }

  return (
    <div>
        <button onClick={fetchData}>Get Data</button>
        <ul>
            {
                state.data.map((item)=> {
                    return <li key={item.id}>{item.title}{" "} <button onClick={()=>deleteData(item.id)}>Delete</button> </li>
                })
            }
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder='Add your title' />
            <button type="submit">Add Now</button>
        </form>
    </div>
  )
}

export default UseReducer2;