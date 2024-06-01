import PropTypes from "prop-types";

function Button({ children, color, className }) {
  let buttonColor;
  switch (color) {
    case "red":
      buttonColor = "bg-red-500";
      break;
    case "yellow":
      buttonColor = "bg-yellow-500";
      break;
    case "green":
      buttonColor = "bg-green-500";
      break;
    default:
      buttonColor = "bg-blue-500";
      break;
  }
  return (
    <button
      className={`text-white p-1 rounded-sm text-xl ${buttonColor} ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  color: PropTypes.oneOf(["red", "yellow", "green"]),
};

export default Button;
