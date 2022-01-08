import { Cardparent } from "./contact"
import { AuthContext } from "../contexts/authContext"

import { useContext } from "react"





export const Dashboard=()=>{
const {token}=useContext(AuthContext)
    
    
  
    
    return <>
    <h1>WELCOME TO THE DASHBOARD</h1>
    <Cardparent>
     <div>
     Users
     </div>

    <div>
    Products
    </div>
    <div>
     Settings

    </div>
</Cardparent>
</>

}