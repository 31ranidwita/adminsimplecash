// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import "./App.css";
// import Others from "./components/others/others";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </Router>
  );
}

export default App;
