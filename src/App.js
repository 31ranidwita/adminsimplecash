import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import PageUser from "./components/pages/manage_user/manage_user";
import PageWorker from "./components/pages/manage_worker/manage_worker";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/manage_user" Component={PageUser} />
        <Route path="/manage_worker" Component={PageWorker} />
      </Routes>
    </Router>
  );
}

export default App;
