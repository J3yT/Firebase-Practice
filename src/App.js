import React from 'react'
import "./App.css";
import { auth, db } from "./Firebase/init";
import { collection, addDoc, getDocs, getDoc, doc, updateDoc } from "firebase/firestore"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true)

  function updatePost() {
    const hardcodedId = "RzYIhrkzArTUQPaxqUAp"
    const postRef = doc(db, "posts", hardcodedId)
    const post = {
      description: "Finish frontend simplified"

    }
    updateDoc(postRef, newPost)
  }

  function deletePost() {
  }

  function createPost() {
    const post = {
      title: "land a $100k job",
      description: "Finish frontend simplified",
    };
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map(elem => ({...elem.data(), id: elem.id}))
  }

  async function getPostById() {
    const hardcodedId = "RzYIhrkzArTUQPaxqUAp";
    const postRef = doc(db, "posts", hardcodedId)
    const postSnap = await getDoc(postRef);
    const post = postSnap.data();
    console.log(post)
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setUser(user)
      }
    })
  }, [])

  function register() {
    createUserWithEmailAndPassword(auth, "email@email123.com", "password")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email123.com", "password")
      .then(({user}) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth)
    setUser({})
  }
  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Sign In</button>
      <button onClick={logout}>Logout</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
      <button onClick={getAllPosts}>Get All Posts</button>
      <button onClick={getPostById}>Get Post</button>
      <button onClick={getPostById}>Get Post</button>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}

export default App;
