import axios from 'axios';
import React, { useState } from 'react'
import {TextField } from '@mui/material'

const Contact = () => {
  const [data, setData] = useState({ fullName: "", job: "",description:""})
  function handleChange(e) {
    e.preventDefault()
    setData({
        ...data, [e.target.name]: e.target.value
    });
  }
  const addData = (e) => {
  e.preventDefault();
  axios.post("http://localhost:9090/users",data);
 console.log("salam")
};
console.log(data);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:100,marginTop:70}}>
      <form >
       <div style={{dispay:"flex",gap:30}}>
         <div>
         <TextField id="outlined-basic" label="Name" variant="outlined" name="fullName" onChange={(e) => handleChange(e)}/>
         {/* <label for="name">Name</label>
        <input id="name" name="fullName" onChange={(e) => handleChange(e)}/> */}
          </div>
         <div style={{marginTop:10}}>
         <TextField id="outlined-basic" label="Job" variant="outlined" name="job" onChange={(e) => handleChange(e)}/>
         {/* <label for="job">Job</label>
           <input id="job" name="job" onChange={(e) => handleChange(e)}/> */}
         </div>
       </div>
       <label style={{paddingTop:20}}>Write Message</label><br/>
       <textarea name="description" onChange={(e) => handleChange(e)}/><br/>
       <button onClick={addData} style={{marginTop:20,background:"red",color:"white",padding:"10px 15px",border:"none",borderRadius:5}}>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
