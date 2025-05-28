import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BooksList() {
  const [books, setBooks] = useState([]);
  const { token: token } = useParams();

  useEffect(() => {
    // const token = localStorage.getItem("token");

    fetch("http://localhost:8080/api/books", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error obteniendo libros:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{textAlign: "center", color: "#7A5FE9", fontFamily: "Jua, sans-serif"}}>Libros</h2>
      <p style={{textAlign: "center", fontFamily: "Jua, sans-serif"}}>¡Ve todos los libros de la biblioteca!</p>
      <div>
        {books.map((book) => (
          <div key={book.id} style={{backgroundColor: "#ECE8FD", display: "flex", flexDirection: "column", margin: "4%", padding: "2%", borderRadius: "10px"}}>
            <p style={{color: "#7A5FE9", fontWeight: "800", fontFamily: "Jua, sans-serif"}}>{book.title}</p>
            <p style={{fontFamily: "Jua, sans-serif"}}>{book.author}</p> 
            <div>
            <Link style={{textDecoration: "none", fontFamily: "Jua, sans-serif"}} to={`/updatebook/${token}/${book.id}`}><button style={{padding: "1%", backgroundColor: "white", border: "2px solid #7A5FE9", borderRadius: "7px", fontFamily: "Jua, sans-serif"}}>editar</button> </Link> 
            <Link style={{textDecoration: "none"}} to={`/deletebook/${token}/${book.id}`}><button style={{padding: "1%", backgroundColor: "#7A5FE9", border: "2px solid white", borderRadius: "7px", color: "white", fontFamily: "Jua, sans-serif"}}>eliminar</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
