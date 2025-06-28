import { useState, useEffect } from "react";
import './App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("blog_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("blog_user", JSON.stringify(userData));
  };

const handleLogout = () => {
  setUser(null);
  localStorage.removeItem("blog_user");
};


  return (
    <>
      {user ? (
        <Home user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;

