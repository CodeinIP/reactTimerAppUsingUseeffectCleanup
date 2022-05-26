import React from 'react'
import axios from 'axios';
import React,{useEffect,useState} from 'react';
const Todos = () => {
    const[page,setPage] =  useState(1);
    const[todos,setTodos] = useState([]);
    const[totalCount,setTotalCount] = useState(0);
    const [pageLimit, setpageLimit] = useState(5)
  
  
    useEffect(()=>{
      const getTodo = async ()=>{
        let r = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${pageLimit}`)
        console.log(r);
        // let d = await r.json()
        setTodos(r.data);
        setTotalCount(Number(r.headers["x-total-count"]));
      };
      getTodo();
    },[page,pageLimit]);
  return (
    <div className="App">
    <button
    disabled={page<=1}
    onClick={()=>{
        setPage(page-1);
    }}>{`<`}</button>
    <select onChange={(e)=> setpageLimit(Number(e.target.value))}>
    <option value={5}>5</option>
    <option value={10}>10</option>
    <option value={15}>15</option>
    </select>
    <button
    disabled={page*5>totalCount}
    onClick={()=>{
      setPage(page+1)
    }}>{`>`}</button>
      {todos.map((todo)=>(
        <div key={todo.id}>{todo.id}:{todo.text}</div>
  ))}
    </div>
  )
}

export default Todos