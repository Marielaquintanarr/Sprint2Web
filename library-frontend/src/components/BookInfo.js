import { useEffect, useState } from "react";

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Libros</h2>
      {books.length === 0 ? (
        <p>No hay libros disponibles.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} style={{ marginBottom: "10px" }}>
              <strong>{book.title}</strong> by {book.author} ({book.publicationYear})<br />
              <em>ISBN:</em> {book.isbn} | <em>Género:</em> {book.genre} | <em>Páginas:</em> {book.pages}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BooksList;
