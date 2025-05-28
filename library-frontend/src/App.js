import Login from "./components/Login";
import BooksList from "./components/BookList";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter> 
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="books/:token" element={<BooksList />} />
            </Routes>
          </main>
      </BrowserRouter>
    </>
  );
}

export default App;
