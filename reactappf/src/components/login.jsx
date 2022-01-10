import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/authContext"
import { useContext } from "react"

export const Bluebtn=styled.button`
background:#2D4263;
padding:5px 20px;
margin:10px;
`


export const Logindiv=styled.div`

background:#ECDBBA;
width:500px;
height:200px;
text-align:center;
align-items:center;
margin:auto;
padding:20px;
margin-top:20px;
&>div{padding:20px;border:2px solid #C84B31}

&>div>input{
    border:1px solid #191919;
    padding:5px;
    border-radius:5px;
    margin:5px;
}

`




export const Login=()=>{
    const style={textDecoration:'none',color:"#C84B31"}
   const [form,setForm]=useState({});
   const navigate=useNavigate();

   const {handletoken} = useContext(AuthContext)
   
   const handleChange=({target:{name,value}})=>{
       setForm({
           ...form,
           [name]:value
       })
   }
   
   return <Logindiv>
       <div>
        <input type="text" onChange={handleChange} placeholder="Enter email" name="email"/><br/>
        <input type="text" onChange={handleChange} placeholder="Enter Your Password" name="password"/><br/>
        <Bluebtn onClick={()=>{
            try{
                fetch("https://reqres.in/api/login",{
                    method:"POST",body:JSON.stringify(form), 
                    headers:{"Content-Type":"application/json"}
                    ,
                }).then(res=>res.json()).then(res=>handletoken(res.token))
             navigate(-1)
            }
             catch(e){console.log(e)}
        }}>Login</Bluebtn>
        </div>

        <p>
           <Link to={"/signup"} style={style}>Get Registered</Link>
            
        </p>

    </Logindiv>
}