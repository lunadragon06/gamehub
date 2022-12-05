import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
	return <div className="error-message">{message}</div>;
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
	message: "An error occured",
};
