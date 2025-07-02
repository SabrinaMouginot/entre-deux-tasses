import { useState } from "react";
import './App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
  };


  return (
    <>
      {showLogin ? (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <Home
          user={user}
          onLogin={() => setShowLogin(true)}
          onLogout={handleLogout}
        />
      )}
    </>
  );
}

export default App;

