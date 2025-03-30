import { useEffect, useState } from "react";
import Pr from "./components/login/Pr";
import Navbar from "./components/Navbar";
import Console from "./components/section/Console";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
      const storedLogin = localStorage.getItem("isLoggedIn");
      const storedUser = localStorage.getItem("loggedInUser");

      if (storedLogin === "true" && storedUser) {
          setIsLoggedIn(true);
          setLoggedInUser(storedUser);
      }
  }, []);

  const handleLogout = () => {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loggedInUser");
      setIsLoggedIn(false);
      setLoggedInUser("");
  };

  return (
    <>
      {isLoggedIn ? (
        <Router>
          <Navbar />
          <div className="container text-center mt-3">
            <h2>Welcome, {loggedInUser}!</h2>
            
          </div>
          <Routes>
            {/* Redirect to today's date on load */}
            <Route path="/" element={<Navigate to={`/${new Date().toISOString().slice(0, 10)}`} />} />
            <Route path="/:date" element={<Console />} />
          </Routes>
        </Router>
      ) : (
        <Pr setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser} />
        
      )}
      <div className="text-center">
        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default App;
