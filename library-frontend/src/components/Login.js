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
        <div style={{textAlign: "center"}}>
            <h2 style={{fontFamily: "Jua, sans-serif"}}>¡Hola</h2>
            <h1 style={{color: "#F08F37", fontFamily: "Jua, sans-serif"}}>Bienvenido!</h1>
        </div>
        <div style={{textAlign: "center", display: "flex", flexDirection: "column", marginLeft: "25%", marginRight: "25%", marginTop: "5%"}}>
            <input
            style={{fontFamily: "Jua, sans-serif"}}
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />
            <input
            style={{fontFamily: "Jua, sans-serif"}}
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button style={{fontFamily: "Jua, sans-serif"}} type="submit">Login</button>
        </div>
      {token && (
        <div style={{justifyItems: "center", width: "100wv"}}>
            <div style={{display: "flex", marginTop: "5%", gap: "5%"}}>
                <Link style={{textDecoration: "none"}} to={`/books/${token}`}>   
                <div style={{backgroundColor: "#E4F2E6", width: "30vw", padding: "15px", borderRadius: "10px"}}>
                    <p style={{color: "#45A03F", fontWeight: "900", textAlign: "center", fontFamily: "Jua, sans-serif"}}>Ver Libros</p>
                    <p style={{textAlign: "center", color: "black", fontFamily: "Jua, sans-serif"}}>Ve  los libros de la biblioteca</p>
                </div>
                </Link>
                <Link style={{textDecoration: "none"}} to={`/createbook/${token}`}>
                    <div style={{backgroundColor: "#FFF9F5",  width: "30vw", padding: "15px", borderRadius: "10px"}}>
                        <p style={{color: "#F08F37", fontWeight: "900", textAlign: "center", fontFamily: "Jua, sans-serif"}}>Crear Libro</p>
                        <p style={{textAlign: "center", color: "black", fontFamily: "Jua, sans-serif"}}>Agrega un nuevo libro a la biblioteca</p>
                    </div>
                </Link>
            </div>
            <div style={{display: "flex", marginTop: "5%", gap: "5%"}}>
                <Link style={{textDecoration: "none"}} to={`/books/${token}`}>   
                <div style={{backgroundColor: "#FEF9E4", width: "30vw", padding: "15px", borderRadius: "10px"}}>
                    <p style={{color: "#FBD43C", fontWeight: "900", textAlign: "center", fontFamily: "Jua, sans-serif"}}>Editar Libro</p>
                    <p style={{textAlign: "center", color: "black", fontFamily: "Jua, sans-serif"}}>Edita un libro de la biblioteca</p>
                </div>
                </Link>
                <Link style={{textDecoration: "none"}} to={`/books/${token}`}>
                    <div style={{backgroundColor: "#ECE8FD",  width: "30vw", padding: "15px", borderRadius: "10px"}}>
                        <p style={{color: "#7B5FF1", fontWeight: "900", textAlign: "center", fontFamily: "Jua, sans-serif"}}>Eliminar Libro</p>
                        <p style={{textAlign: "center", color: "black", fontFamily: "Jua, sans-serif"}}>Elimina un libro de la biblioteca</p>
                    </div>
                </Link>
            </div>
        </div>
        )}
    </form>
  );
}

export default Login;
