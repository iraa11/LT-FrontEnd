import React, { useState } from "react";
import './LoginCss.css'

const Login =() =>{
    const[action,setAction] = useState("Sign Up")
    return (
        <>
        <div className = 'container'>
            <div className ="header">
                <div className="text">{action}</div>
                    <div className="underline"></div>                   
            </div>
            <div className="inputs"> 
            {action ==="Login"?<div></div>:<div className="input">
                <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" alt = "" />
                <input type="text" placeholder="Name"/>
                </div>    }
            

                <div className="input">
                <img src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" alt = ""/>
                <input type="email" placeholder="Email Id" />
                </div>   

                <div className="input">
                <img src="https://cdn-icons-png.flaticon.com/128/2889/2889676.png" alt = ""/>
                <input type="password" placeholder="Password"/>
                </div>  
                 
            </div>
            {action === "Sign Up"?<div></div>:<div className="forgot-password">forgot password ?<span>Click Here !</span></div>}
            
            <div className="submit-container">
                <div className={action === "Login" ?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                    Sign Up
                </div>
                <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>
                    Login
                </div>
            </div>
        </div>
        </>
    )
}
export default Login;