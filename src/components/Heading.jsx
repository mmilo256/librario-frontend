import PropTypes from "prop-types";

function Heading({ children }) {
  return <h2 className="text-2xl py-5">{children}</h2>;
}

Heading.propTypes = {
  children: PropTypes.string,
};

export default Heading;
