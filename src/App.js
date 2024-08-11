import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteContext from "./context/NoteContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="App">
      <NoteContext>
        <Router>
          <Navbar />
          <Alert message="success" />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
        </Router>
      </NoteContext>
    </div>
  );
}

export default App;
