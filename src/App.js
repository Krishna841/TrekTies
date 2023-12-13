import "./App.css";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

import { useAuthState } from "react-firebase-hooks/auth";

import Trip from "./components/trip";
import SignIn from "./components/signin";
import Dashboard from "./components/dashboard";

firebase.initializeApp({
  apiKey: "AIzaSyDaef2nNUCZCXHCsAHdhYYDXRc9DYoMZ_M",
  authDomain: "chat-19e3f.firebaseapp.com",
  projectId: "chat-19e3f",
  databaseURL: "https:/chat-19e3f.firebaseio.com",
  storageBucket: "chat-19e3f.appspot.com",
  messagingSenderId: "898131867916",
  appId: "1:898131867916:web:29be149563f774f899b129",
  measurementId: "G-EBTC3MNPB1",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {/* <section>
        {user ? (
          <Trip auth={auth} firestore={firestore} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section> */}
      <Dashboard />
    </div>
  );
}

export default App;
