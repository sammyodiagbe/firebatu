import Head from "next/head";
import styles from "../styles/Home.module.css";
import { auth, firestore } from "../config/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useContext, useEffect } from "react";
import { authContext } from "../context/authcontext";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import _ from "lodash";
import Loader from "../components/loader";

// const activeUser = auth.currentUser;
// console.log(activeUser);

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setUserPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user, authenticated, loading } = useContext(authContext);
  const router = useRouter();

  const createUserWithUsername = async (e) => {
    e.preventDefault();
    try {
      const createuser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const updateprofile = await updateProfile(auth.currentUser, {
        displayName: username,
      });
      const add = await setDoc(doc(firestore, "users", auth.currentUser.uid), {
        username,
        xp: 1000,
        total_batus: 0,
        won: 0,
        lost: 0,
      });
      router.push("/home");
    } catch (error) {}
  };
  if (loading) {
    return <Loader />;
  } else {
    console.log(user);
    return <div>Loading stopped</div>;
  }
}
