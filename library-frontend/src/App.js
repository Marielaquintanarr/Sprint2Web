import Login from "./components/Login";
import BooksList from "./components/BookList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";
import DeleteBook from "./components/DeleteBook";
function App() {
  return (
    <>
      <BrowserRouter> 
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="books/:token" element={<BooksList />} />
              <Route path="createbook/:token" element={<CreateBook />} />
              <Route path="updatebook/:token/:id" element={<EditBook />} />
              <Route path="deletebook/:token/:id" element={<DeleteBook />} />
            </Routes>
          </main>
      </BrowserRouter>
    </>
  );
}

export default App;
