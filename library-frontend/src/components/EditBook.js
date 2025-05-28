import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import edit from "../images/edit2.png"
function EditBook() {
  const [book, setBook] = useState([]);
  const { token: token } = useParams();
  const { id: bookid } = useParams();

  const handleActualizarLibro = async () => {
    try {
        const res = await fetch(`http://localhost:8080/api/books/${bookid}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const data = await res.json();
        if (data.success && data.data.length > 0) {
        setBook(data.data[0]);
        } else {
        setError("Libro no encontradp");
        }
        } catch (e) {
        setError("Error al actualizar libro");
        }
    };

  useEffect(() => {
    // const token = localStorage.getItem("token");

    fetch(`http://localhost:8080/api/books/${bookid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("No autorizado");
        return res.json();
      })
      .then((data) => setBook(data))
      .catch((error) => console.error("Error obteniendo libros:", error));
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{fontFamily: "Jua, sans-serif", color: "#F8D439"}}>Editar Libro</h2>
      <p style={{fontFamily: "Jua, sans-serif"}}> Llena los campos para editar un libro</p>
      <img src={edit} width="20%" style={{padding: "4%"}}></img>
      {book && (
                <div style={{
                    marginLeft: "5%",
                    marginRight: "5%",
                    marginTop:"2%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                  <input style={{backgroundColor: "#FEF9E4", border: "none", padding: "2%", borderRadius: "20px", fontFamily: "Jua, sans-serif"}}
                    name="title"
                    placeholder={book.title}
                    type="text"
                  ></input>
                  <input style={{backgroundColor: "#FEF9E4", border: "none", padding: "2%", borderRadius: "20px", fontFamily: "Jua, sans-serif"}}
                    name="title"
                    placeholder={book.author}
                    type="text"
                  ></input>
                  <Link to="/"><button style={{backgroundColor: "#F8D439", padding: "2%", border: "none", width: "20%", borderRadius: "10px", fontFamily: "Jua, sans-serif"}} onClick={handleActualizarLibro}>Guardar libro</button></Link>
            </div>
      )}
    </div>
  );
}

export default EditBook;
