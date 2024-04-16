import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import PlayerPage from "./components/PlayerPage";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
//  const [user, setUser] = useState(null);
//   //WE PUT THIS OUTSIDE OF THE USE EFFECT SO ITS GLOBAL BUT CALL INSIDE THE USE EFFECT
//   async function fetchUser() {
//     //getting the token from local storing
//     const token = localStorage.getItem("token");
//     //getting that user from the backend by using the information on the token
//     const resp = await axios.get("/api/signup", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     //then using use state to set that stored user inside of the the user variable
//     setUser(resp.data);
//   }

//   useEffect(() => {
//     //creating a function to create user

//     //getting the token again. have to do this as the previous taken is only within the function aboves scope
//     const token = localStorage.getItem("token");
//     //if there is a user then run the fetchUser function. can run this function is there is no user
//     if (token) fetchUser();
//   }, []);




    return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayerPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App
