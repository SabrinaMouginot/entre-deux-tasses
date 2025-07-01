import { useState, useEffect } from "react";
import './App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("blog_user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("blog_user", JSON.stringify(userData));
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("blog_user");
  };


  return (
    <>
      {/* {user ? ( */}
      <Home user={user} onLogin={() => setShowLogin(true)} onLogout={handleLogout} />
      {/* ) : ( */}
      {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <Login onLogin={handleLogin} />
          </div>
    )}
    </>
  );
}

export default App;

