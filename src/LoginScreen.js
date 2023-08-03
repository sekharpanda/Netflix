import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./screens/SignUpScreen";



function LoginScreen(){

    const [signIn, setSignIn]= useState(false);
    return (
        <div className="Loginscreen">

        <div className="loginScreen_background">
            <img className="loginScreen_logo" src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt=""/>
       
       <button onClick={() => setSignIn(true)} 
       className="loginScreen_button">Sign In</button>
        
        <div className="loginScreen_gradient"></div>
        <div className="loginScreen_body">


           {signIn ? (
           <SignInScreen/>
           ):(
               
<>
            <h1>Unlimited films, Tv Programs & Many More</h1>
            <h2>Watch anywhere. Cancel at any time</h2>
            <h3>Ready to watch ? Enter your email to create or restart your membership.</h3>
        
            <div className="LoginScreen_input">
            <form>
                <input type="email" placeholder="Email"/>
                <button onClick={() => setSignIn(true)} 
                className="LoginScreen_getStarted">
                    Get Started</button>
            </form>

           </div>
</>
            )};


            </div>
            </div>
            </div>


    )
           }
export default LoginScreen;