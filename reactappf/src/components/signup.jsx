import { Logindiv } from "./login";
import { Bluebtn } from "./login";
import { Link } from "react-router-dom";



export const Signup=()=>{
    const style={textDecoration:'none',color:"#C84B31"}
    return <Logindiv>
    <div>
     <input type="text" placeholder="Enter email"/><br/>
     <input type="text" placeholder="Enter Your Password"/><br/>
     <Bluebtn>Registered</Bluebtn>
     </div>

     <p>
        <Link to={"/login"} style={style}>Already has Account</Link>
         
     </p>

 </Logindiv>
}