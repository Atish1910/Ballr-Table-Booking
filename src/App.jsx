import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Navbar from "./components/Navbar";
import Console from "./components/section/Console";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ExlusiveVip from "./components/section/ExlusiveVip";
import Register from "./components/login/Register"; // Import Register component

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
    <Router> {/* ✅ Move <Router> outside */}
      {isLoggedIn ? (
        <>
          <Navbar />
          <div className="container text-center mt-3">
            <h2>Welcome, {loggedInUser}!</h2>
          </div>
          <ExlusiveVip />
          <Routes>
            <Route path="/" element={<Navigate to={`/${new Date().toISOString().slice(0, 10)}`} />} />
            <Route path="/:date" element={<Console />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setLoggedInUser={setLoggedInUser} />} />
          <Route path="/register" element={<Register />} /> {/* ✅ Add Register Route */}
        </Routes>
      )}
      <div className="text-center">
        {isLoggedIn && <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>}
      </div>
    </Router>
  );
}

export default App;
