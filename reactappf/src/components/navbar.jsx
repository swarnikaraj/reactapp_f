import styled from "styled-components";

import logo1 from "../logo1.png"

import cart1 from "../cart.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";


const Navbar=styled.div`
background:#2D4263;
color:#ECDBBA;

display:flex;
height:60px;
text-align:center;
align-items:center;

& >div {
    display:flex;
    margin:auto;
  
    padding:5px 30px;
   
    
}

& >div>img{height:60px; width:60px;}

& >div>div{
   
    margin:auto;
    padding:0px 15px;
    cursor:pointer;
}


`

const Button=styled.button`
background:rgb(237,90,163);
padding:5px 17px;
border:2px solid #C84B31;
cursor:pointer;
`

export const Nav=()=>{
    const style={textDecoration:'none',color:"#ECDBBA"}
    const {token} = useContext(AuthContext)
    return <Navbar>
        <div> <img src={logo1}  alt="logo"/></div>
        <div>
            <div>
            <Link to={"/"}  style={style}>Home</Link>
            
            
            </div>
            <div><Link to={"/about"} style={style}>About</Link>
            </div>
            <div><Link to={"/contact"} style={style}>Contact</Link></div>
           
            <div><Link to={"/dashboard"} style={style}>Dashboard</Link></div>

        </div>

        <div><Link to={"/cart"} style={style}><img src={cart1} style={{height:60}} alt="cart"/></Link>
        <div><Link to={"/login"} style={style}><Button>{token? "logout":"login"}</Button></Link></div>
        
        </div>
    </Navbar>
}