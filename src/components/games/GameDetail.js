import { API } from "../../constants/api";
import axios from "axios";
import ErrorMessage from "../../common/ErrorMessage";
import Heading from '../../components/layout/Heading';
import Loader from "../layout/Loader";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function GameDetail() {
	const [game, setGame] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    const http = API;

    let history = useNavigate();

    const { id } = useParams();

    if (!id) {
        history.push("/");
    }

	useEffect(
		function () {
			async function fetchDataDetail() {
				try {
                    const response = await axios.get(http + "/" + id);
                    console.log(response);
                if (response.status === 200) {
                    console.log(response);
					setGame(response.data);
                } else {
                    setError("Failed to upload this particular game page!");
                }
                } catch (error) {
                    setError(error.toString());
                } finally {
                    setLoading(false);
                }
            }
			fetchDataDetail();
		}, 
	);

	if (loading) {
		return <Loader />;
	}
	if (error) {
		return <ErrorMessage message={`Error: ${error}`} />;
	}

	return (
		<>
			<section className="card">
			    <img src={game.images[0].src} alt={game.name} />
				<article className="card__content">
				    <div>
				        <Heading content={game.name} />
					    <span className="card__tag">{game.categories[0].name}</span>
					</div>
			        <p dangerouslySetInnerHTML={{ __html: game.description }} />
				</article>
			</section>
		</>
	);
}

export default GameDetail;
