import PropTypes from "prop-types";
import ActionsCell from "./ActionsCell";

function Table({ columns, data }) {
  const cellStyle = "py-2 px-4 text-left";

  return (
    <table className="shadow bg-white table table-auto w-full rounded overflow-hidden">
      <thead>
        <tr className="bg-cyan-900 text-white shadow">
          {columns.map((col) => (
            <th className={cellStyle} key={col}>
              {col}
            </th>
          ))}
          <th className={cellStyle}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className="even:bg-slate-100 h-16" key={row.id}>
            {Object.values(row).map((cell, index) => (
              <td className={`${cellStyle}`} key={index}>
                {cell}
              </td>
            ))}
            <ActionsCell className={cellStyle} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};

export default Table;
