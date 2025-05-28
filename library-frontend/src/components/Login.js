import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("password");
  const [token, setToken] = useState(null); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.text();
      setToken(data);
        localStorage.setItem("token", data);


    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: "20px" }}>
      <h2>Iniciar Sesión</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <p style={{color: "black"}}>{token}</p>

      <button type="submit">Login</button>

      {/* Mostrar Link solo si ya tienes el token */}
      {token && (
        <div style={{ marginTop: "10px" }}>
          <Link to={`/books/${token}`}>
            Ir a libros
          </Link>
        </div>
      )}
    </form>
  );
}

export default Login;
