import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Genres from "./pages/Genres";
import { useEffect, useState } from "react";

function App() {
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/authors");
      const authors = await response.json();
      setAuthors(authors);
    })();
  }, [setAuthors]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/genres");
      const genres = await response.json();
      setGenres(genres);
    })();
  }, [setGenres]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/books");
      const books = await response.json();
      setBooks(books);
    })();
  }, [setBooks]);

  return (
    <div className="bg-slate-50 min-h-dvh">
      <Header />
      <h1 className="text-4xl text-center py-6">Tu Biblioteca Personal</h1>
      <Tabs />
      <Routes>
        <Route
          path="books"
          element={<Books data={books} genres={genres} authors={authors} />}
        />
        <Route path="authors" element={<Authors data={authors} />} />
        <Route path="genres" element={<Genres data={genres} />} />
      </Routes>
    </div>
  );
}

export default App;
