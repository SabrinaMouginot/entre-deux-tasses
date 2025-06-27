import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification simple
    if (username === "admin" && password === "1234") {
      onLogin({ username, isAdmin: true });
    } else if (username === "user" && password === "5678") {
      onLogin({ username, isAdmin: false });
    } else {
      setError("Identifiants incorrects.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">Connexion</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom d’utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>

        <div className="mt-4 text-center space-y-2 text-sm">
          <button className="text-blue-600 hover:underline">Mot de passe oublié ?</button>
          <br />
          <button className="text-blue-600 hover:underline">Créer un compte</button>
        </div>
      </div>
    </div>
  );
}
