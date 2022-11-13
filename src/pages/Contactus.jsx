
import "../pages/Contactus.css"
import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { FaInstagramSquare,FaRedditSquare,FaGithubSquare,FaLinkedin } from "react-icons/fa";
import logo from "../assets/newlogo.jpg";



export default function CreatePost({ isAuth }){
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const postsCollectionRef = collection(db, "contactus");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      name,
      email,
      message,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  

    return(
      <div className="Contactus">
        <div className="Contactus_1">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="Contactus_1_shy">DONT BE SHY</h1>
          <br/>
          {/* <img src="public\newlogo.jpg" alt="" className="Contactus_1_logo"/> */}
          <img src={logo} className="Contactus_1_logo"/>
          <br/>
          <h2 className="Contactus_1_hi">SAY HI</h2>
          <br/>
          <br/>
          <br/>
          <br/>

          <div className="icons">
            <a  href="https://github.com/Ajitesh72">
            <FaGithubSquare size = '36' className="icons_img"/>
            </a>

            <a href="https://www.reddit.com/search/?q=Leading_Dot101">
            <FaRedditSquare size ='36'className="icons_img"/>
            </a>

            <a href="https://www.instagram.com/ajitesh._/">
            <FaInstagramSquare size ='36'className="icons_img"/>
            </a>

            <a href="https://www.linkedin.com/in/ajitesh-dubey-4b5852220/">
            <FaLinkedin size ='36'className="icons_img"/>
            </a>
          </div>
        </div>

        <div className="Contactus_2">
          <p className="Contactus_2_text">DO YOU HAVE ANY QUESTION,FEEDBACK OR SUGGESTION?<br/>WE WOULD LOVE TO HEAR FROM YOU!</p>
          <br/>
            <textarea  cols="57"
            className="text"

              placeholder="ENTER YOUR NAME"
              onChange={(event) => {
                setName(event.target.value);
              }}
              />
            <br/>
            <br/>
            <textarea
              placeholder="ENTER YOUR MESSAGE"
              rows="7" cols="57" className="text"

              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
            <br/>
            <br/>
            <textarea
              placeholder="ENTER YOUR EMAIL"
              className="text" cols="57"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          <br/><br/>
          <div className="contactus-btn-1" >
          <button  className="contactus-btn-2" onClick={createPost} >SUBMIT</button>
           {/* <FaHeart /> */}
          </div>
        </div>
      </div>
)
}
    