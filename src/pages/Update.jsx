import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc,onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import Contactus from "./Contactus";
import { FaDumpster } from "react-icons/fa";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
 
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    

    getPosts();
  },[]);


 
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homePage">
      {postLists.map((posts) => {
        console.log(posts.id.data)
        return (
          <div className="post">
            <div className="xyz">
            <div className="postHeader">
              <div className="title">
                <h1> {posts.title}</h1>
                <br/>
              </div>
             
            </div>
            <div className="postTextContainer"> {posts.postText} </div>
            <br/>
            <h3>@{posts.author.name}</h3>
            <br/>
            <div className="deletePost">
                {isAuth && posts.author.id === auth.currentUser.uid && (
                  <button  className="deletepost"
                    onClick={() => {
                      deletePost(posts.id);
                     
                    }}
                  >
                    {" "}
                    <FaDumpster size="25"/>
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
       <Contactus/>

    </div>
  );
}

export default Home;   
    

    