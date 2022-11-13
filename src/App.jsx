import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Update from "./pages/Update";
import Contactus from "./pages/Contactus";

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import logo2 from "./assets/Rectangle 6.png";




function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
 
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue',
  };
  return (
    
   <Router>
    <nav className="Navbar">
    
      <div className="Navbar-header">
        {isAuth?(
      <button onClick={signUserOut} style={{borderRadius:"40px 10px 20px 10px",padding:"0.9%  2.5%",marginRight:"4%",marginTop:"2%"}}className="Logout-btn" >LOGOUT   </button>
      ):
      <></>
      }
      </div>
      
      <div className="Routes"> 

     
      <Link to="/" style={{textDecoration: "none",color:"whitesmoke"}}><img src="../public/logo.png" alt="" className="LOGO" /></Link>
      
      {!isAuth ? (
         <div className="login"> 
          <Link to="/login"  style={{textDecoration: "none",color:"White"}} > Login </Link>
          <Link to="/ContactUs" style={{textDecoration: "none"}}className="route_Text"> ContactUs </Link>
         </div>
          
        ) : (
          <>
            <Link to="/createpost" style={{textDecoration: "none"}} className="route_Text"> CreatePost </Link>
            <Link to="/edit" style={{textDecoration: "none"}}className="route_Text"> DeletePost </Link>
            <Link to="/ContactUs" style={{textDecoration: "none"}}className="route_Text"> ContactUs </Link>
          </>
          )
        }
        </div>
       
    </nav>
    
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth}/>}/>
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path="/edit" element={<Update isAuth={isAuth}/>}/>
      <Route path="/contactUs" element={<Contactus isAuth={isAuth}/>}/>
      <Route path="/*" element={<h1>Error Page</h1>}></Route>
      
    </Routes>
   </Router>
    
  )
}

export default App
