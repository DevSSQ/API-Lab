import React, { useEffect, useState } from 'react';
import axios from "axios";

function Read() {
  const [state, setstate] = useState([])
  useEffect (() => {
    axios.get("https://636242497521369cd068dfdc.mockapi.io/ToDo").then((res)=>{
      console.log(res.data)
      setstate(res.data)
    })
  }, [])
  return (
    <div>
        {state.map(items => {
        return(
          <div>
          <p>First Name: {items.fName}</p>
          <p>Last Name: {items.lName}</p>
          <p>Email: {items.email}</p>
          <p>Password: {items.pass}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Read