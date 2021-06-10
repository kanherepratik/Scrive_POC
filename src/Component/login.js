import React from "react"
import axios from 'axios'

function Login({email,password}){

    const submitRequest = (e) => {
        e.preventDefault()
     
      axios.post(`https://scrive.com/api/v2/getpersonaltoken?email=kanhere.priya@gmail.com#password=Kanhere@123456'`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    return(
        <div>
            <form onSubmit={(e) => submitRequest(e)}> 
            <input type="text" placeholder="email" value={email}/><br></br>
            <input type="text" placeholder="Password" value={password}/><br></br>
            <button>Log in</button>>
            </form>
        </div>
    )
}

export default Login