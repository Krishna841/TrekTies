import "./App.css";
import firebase from "firebase/compat/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Trip from "./components/trip";
import SignIn from "./components/signin";
import Dashboard from "./components/dashboard";
import { UserContext, UserProvider } from "./components/context";

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
  const { currentUser } = useContext(UserContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/trip"
            element={<Trip auth={auth} firestore={firestore} />}
          />
          <Route path="/" element={<SignIn auth={auth} />} />
        </Routes>
      </BrowserRouter>

      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
