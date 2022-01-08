import {createContext} from "react";
import { useState } from "react";

export const AuthContext=createContext({token:"",handletoken:()=>{}});

export const AuthContextProvider=({children})=>{

const [token,setToken]=useState("")
const handletoken=(token)=>{
    setToken(token);
}


return <AuthContext.Provider value={{token,handletoken}}>
    {children}
</AuthContext.Provider>
}