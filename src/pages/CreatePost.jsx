import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function CreatePost({ isAuth }){
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

    return(
      <div className="CREATE-POST">
        <div >
        <p className="writer_text">A writer is a torchbearer. He throws light on the<br/> dark corners of the society so that
        some people<br/> can work to make it better.</p> 

        </div>
        
        <div className="createPostPage" >
        <div className="cpContainer">
          <h1 className="title-header">Create A Story</h1>
          <br/>
          
            <label className="extra_css_createpost"> </label>
            <textarea
              placeholder="Title..."
              style={{color:"red"}}
              cols="72"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            columns="50" row="1" />
            <br/>
            <br/>
            <label className="extra_css_createpost" > </label>
            <textarea
            className="extra_css_createpost"
            style={{color:"purple"}}
              placeholder="ENTER YOUR STORY..."
              rows="7" cols="72"
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            />
          
          <br/><br/>
          <button className="SubmitPost"  onClick={createPost} > Submit Story</button>
        </div>
        <hr style={{color:"black"}}/>
        
      </div>
      <p className="writer_text_2">A good writer can<br/> also plant seeds of new thoughts, which may<br/>
        become helpful to the forthcoming generations.</p>
      </div>
)
}
    