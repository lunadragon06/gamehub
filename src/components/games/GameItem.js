import PropTypes from "prop-types";
import SubHeading from "../layout/typography/SubHeading";
import { Link } from "react-router-dom";

// Make decimals display from the API 
function insertDecimal(num) {
	return (num / 100).toFixed(2);
} 
// to test if it's working as expected 
console.log(insertDecimal(1982));

function GameItem({ id, name, images, prices }) {
	return (
		<article className="game">
		    <Link to={`detail/${id}`}>
				<img src={images[0].src} alt={name} width="100%" />
				<div className="game__col">
                    <SubHeading subcontent={name} />
					<span className="game__col-um">
					    <p>$</p>
						<p> 
							{insertDecimal(prices.price)}
						</p>
					</span>
                </div>
		    </Link>
			</article>
	);
}

GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
};

export default GameItem;
