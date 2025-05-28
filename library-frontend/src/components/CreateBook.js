import { useState } from "react";
import create from "../images/create.png" 
function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const bookData = { title, author };

    fetch("http://localhost:8080/api/books/createbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error creando libro");
        return res.json();
      })
      .then((data) => {
        setMessage(`Libro creado: ${data.title} por ${data.author}`);
        setTitle("");
        setAuthor("");
      })
      .catch((error) => setMessage(error.message));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center"}}>
      <h2 style={{color: "#F19335", fontFamily: "Jua, sans-serif"}}>Crear Libro</h2>
      <p style={{fontFamily: "Jua, sans-serif"}}>Crea un nuevo libro llenando los campos</p>
      <img src={create} width="20%" style={{padding: "4%"}}></img>
      <form style={{alignItems: "center", display: "flex", flexDirection: "column", gap: "40px"}} onSubmit={handleSubmit}>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <label style={{fontFamily: "Jua, sans-serif"}}>Título:</label>
          <input style={{backgroundColor: "#FFF9F5", border: "none", padding: "2%", borderRadius: "20px"}}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div style={{display: "flex", gap: "10px", alignItems: "center"}}>
          <label style={{fontFamily: "Jua, sans-serif"}}>Autor:</label>
          <input style={{backgroundColor: "#FFF9F5", border: "none", padding: "2%", borderRadius: "20px"}}
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px", backgroundColor: "#F19233", borderRadius: "10px", border: "none", padding: "10px", width: "30%", fontFamily: "Jua, sans-serif" }}>Crear Libro</button>
      </form>
    </div>
  );
}

export default CreateBook;
