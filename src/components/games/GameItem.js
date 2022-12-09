import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SubHeading from "../layout/typography/SubHeading";

// Make decimals display from the API 
function insertDecimal(num) {
	return (num / 100).toFixed(2);
} 
// test if it's working as desired and expected with one of APIs examples 
console.log(insertDecimal(1982));

function GameItem({ id, name, images, prices }) {

	return (
		<article className="game">
		    <Link to={`detail/${id}`}>
				<img src={images[0].src} alt={name} width="100%" />
				<div className="game__col">
                    <SubHeading subcontent={name} />
					<span className="game__col-um">
					    <b>
						    $
						</b>
						<p className="pricetag">
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
