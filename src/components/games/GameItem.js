import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GameItem({ id, name, images }) {
	return (
		<article className="game">
		    <Link to={`detail/${id}`}>
				<img src={images[0].src} alt={name} width="100%" />
				<h2>{name}</h2>
				<p>$ </p>
		    </Link>
			</article>
	);
}

GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
};

export default GameItem;
