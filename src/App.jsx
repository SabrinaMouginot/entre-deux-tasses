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

  return (
    <>
      {user ? (
        <Home user={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;

