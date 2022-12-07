import PropTypes from "prop-types";

export default function SubHeading(props) {
	const { subcontent } = props;
	return <h2>{subcontent}</h2>;
}

SubHeading.propTypes = {
	subcontent: PropTypes.string.isRequired,
};
