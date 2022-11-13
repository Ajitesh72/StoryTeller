import React from "react";
import{auth,provider}from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../Login.css'

export default function Login({ setIsAuth }){
    let navigate = useNavigate();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
          localStorage.setItem("isAuth", true);
          setIsAuth(true); 
          navigate("/");
        });
      };
    // 
    return(
      <div className="Header">
          <div className="Header-background">
          </div>
          <div className="Header-content">
          
             <div className="Header-hero">
                 <p>“Medicine, law, business, engineering, these are all noble pursuits,<br/> and
                   necessary to sustain life. But poetry, beauty, romance, love, these are what<br/> we stay alive for.”</p>
                 <p>~Dead Poet's Society</p>
                 <button className="Button" onClick={signInWithGoogle}>Sign up</button>
              </div>

              <div className="Header-visuals">
              <div className="Iphone">

                </div>
                
              </div>
             </div>
             
          </div>


         

      
  
      

    )

}
    