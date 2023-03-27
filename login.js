import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

class Login extends React.Component{
    render() {        
        return (
        <div className="login">
            <div className="background">
              
               <div className="box">
     <form>
       <h1>Log in</h1> 
       <div className="inputBox">
         <input type="text"  id="email" required="required"/>
         <span>Username</span>
         <i></i>
       </div>
     <div className="inputBox">
        <input type="password" required="required" />
        <span>Password</span>
        <i></i>
     </div><br></br>
     <div className="links">
        <a href="#">Forgot Password </a>
     </div>
     <br></br>
     <div className="button">
     <Link to='/home'>Submit</Link>
     </div>
</form>
</div>
</div>

   </div>
        );
    }
}
export default Login;