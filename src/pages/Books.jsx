import PropTypes from "prop-types";
import Heading from "../components/Heading";
import Table from "../components/Table";

function Books({ data, genres, authors }) {
  const parseBooks = (books, authors, genres) => {
    return books.map((book) => {
      const author = authors.find((author) => author.id === book.author_id);
      const genre = genres.find((genre) => genre.id === book.genre_id);
      const bookData = {
        image: <img className="w-12" src={book.image_url} />,
        title: book.title,
        description: book.book_desc,
        author: author.author_name,
        genre: genre.genre,
      };
      return bookData;
    });
  };

  const table = {
    columnns: ["Portada", "Título", "Descripción", "Autor", "Género"],
    data,
  };

  return (
    <div className="container mx-auto px-1">
      <Heading>Lista de libros</Heading>
      <Table
        columns={table.columnns}
        data={parseBooks(data, authors, genres)}
      />
    </div>
  );
}

Books.propTypes = {
  data: PropTypes.array,
  genres: PropTypes.array,
  authors: PropTypes.array,
};

export default Books;
