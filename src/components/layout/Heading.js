import PropTypes from "prop-types";

export default function Heading(props) {
	const { content } = props;
	return <h1>{content}</h1>;
}

Heading.propTypes = {
	content: PropTypes.string.isRequired,
};
