import PropTypes from "prop-types";
import Heading from "../components/Heading";
import Table from "../components/Table";

function Genres({ data }) {
  const table = {
    columnns: ["ID", "Nombre"],
    data,
  };

  return (
    <div className="container mx-auto px-1">
      <Heading>Lista de géneros</Heading>
      <Table columns={table.columnns} data={table.data} />
    </div>
  );
}

Genres.propTypes = {
  data: PropTypes.array,
};

export default Genres;
