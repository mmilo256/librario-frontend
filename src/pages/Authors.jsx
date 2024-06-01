import PropTypes from "prop-types";
import Heading from "../components/Heading";
import Table from "../components/Table";

function Authors({ data }) {
  const table = {
    columnns: ["ID", "Nombre"],
    data,
  };

  return (
    <div className="container mx-auto px-1">
      <Heading>Lista de autores</Heading>
      <Table columns={table.columnns} data={table.data} />
    </div>
  );
}

Authors.propTypes = {
  data: PropTypes.array,
};

export default Authors;
