import { useEffect, useState } from "react";

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

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
      <h2>Libros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
