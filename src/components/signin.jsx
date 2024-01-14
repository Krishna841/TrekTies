import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

import { UserContext } from "./context";

function SignIn({ auth }) {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      navigate("/trip");
    });
  };

  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  );
}

export default SignIn;
