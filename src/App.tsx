import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/Home";
import PlayerPage from "./components/PlayerPage";

function App() {
    return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayerPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App
