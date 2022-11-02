import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Create from './component/Create';
import Read from './component/Read';


function App() {
  // 1. get (Read)
  const [state, setstate] = useState([])
  // useEffect (() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts/").then((res)=>{
  //     console.log(res.data)
  //     setstate(res.data)
  //   })
  // }, [])
 
  useEffect (() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res)=>{
      console.log(res.data.results)
      setstate(res.data.results)
    })
  }, [])


  return (
    <div className="App">
      {state.map(items => {
        return(
          <div>
          <img src={items.image}/>
          <p>{items.name}</p>
          </div>
        )
      })}

      {/* <Create/> */}
      {/* <Read/> */}




    </div>
  );
}

export default App;
