import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import PlayerPage from "./components/PlayerPage";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ShowIndividualPlayer from "./components/IndividualFootballer";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateFootballer from "./components/Create";
import EditFootballer from "./components/Edit";
import FiveASide from "./components/FiveASide";
import { baseUrl } from "./config";
import Random from "./components/randomchoice";

function App() {
 

  const [user, setUser] = useState(null);


  async function fetchUser() {
    const token = localStorage.getItem("token");
    const resp = await axios.get(`${baseUrl}/signup`, {
      headers: { Authorization: `Bearer ${token}` },
      
    });
    console.log(token)
    setUser(resp.data);
  }
  
  console.log( user);
 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser();
  }, []);

  return (
    <main>
      <Router>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayerPage />} />
          <Route path="/login" element={<Login fetchUser={fetchUser}/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/players/:id" element={<ShowIndividualPlayer user={user} setUser={setUser} />} />
          <Route path="/create" element={<CreateFootballer />} />
          <Route path="/edit/:id" element={<EditFootballer />} />
          <Route path="/fiveaside" element={<FiveASide />} />
          <Route path="/chooseplayer" element={<Random />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
