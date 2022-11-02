import React, {useState} from 'react'
import axios from 'axios'



function Create() {
const [fName, setfName] = useState()
const [lName, setlName] = useState()
const [email, setEmail] = useState()
const [pass, setPass] = useState()
let url = "https://636242497521369cd068dfdc.mockapi.io/ToDo"

const postData = () =>{
axios.post(url, {
    fName,
    lName,
    email,
    pass
}).then(res => {
    console.log(res)
})
}
  return (
    <div>
        <input placeholder='First name' onChange={e=>{setfName(e.target.value)}} ></input>
        <input placeholder='Last name' onChange={e=>{setlName(e.target.value)}} ></input>
        <input placeholder='Email' onChange={e=>{setEmail(e.target.value)}} ></input>
        <input placeholder='Password' onChange={e=>{setPass(e.target.value)}} ></input>
        <button onClick={postData} >Sign up</button>

    </div>
  )
}

export default Create