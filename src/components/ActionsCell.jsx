import PropTypes from "prop-types";
import { MdDelete, MdEdit } from "react-icons/md";
import Button from "./Button";

function ActionsCell({ className }) {
  return (
    <td className={`${className} w-32`}>
      <Button className="mr-2" color="blue">
        <MdEdit />
      </Button>
      <Button color="red">
        <MdDelete />
      </Button>
    </td>
  );
}

ActionsCell.propTypes = {
  className: PropTypes.string,
};

export default ActionsCell;
