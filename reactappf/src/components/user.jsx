import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import styled from "styled-components";

const Card=styled.div`
width:400px;height:200px;
background:#ECDBBA;
border:2px solid #2D4263;
padding:20px;
margin:auto;
margin-top:50px;
align-items:center;
text-align:center;

`

export const User=()=>{
    const {id}=useParams();
    const [user,setUser]=useState({});


    useEffect(()=>{
    fetch(`https://reqres.in/api/users/${id}`).then(d=>d.json()).then(d=>{setUser(d.data)})

    },[id])
    return <Card>
    <img src={user.avatar} alt="I am a user"/>
    <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>  
    
    <p><strong>Contact:</strong> {user.email}</p>
    
    </Card>

}